import * as yup from 'yup';
import clsx from 'clsx';
import HeaderRoleList from '../HeaderRoleList';
import useGetRoles from '../../hooks/useGetRoles';
import LoadingHeaderAdminList from '../LoadingHeaderRoleList';
import LoadingRoleList from '../LoadingRoleList';
import { useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from 'hooks/useMediaQuery';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IInputDeleteCheckedRole } from '../../dto/delete-role-list.dto';
import TableRoleList from './TableRoleList';

export default function RoleList() {
  const navigate = useNavigate();

  const [currPage, setCurrPage] = useState<number>(
    parseInt(
      (location.search
        ? location.search
            .split('?')[1]
            .split('&')
            .find((val) => val.includes('page='))
            ?.split('=')[1]
        : '1') || '1',
    ),
  );

  const { data, status } = useGetRoles();

  const [searchCharacters, setSearchCharacters] = useState<string>();

  const { deleteCheckedRoles } = useDeleteCheckedRole();

  const { isXsSmaller, isSmSmaller } = useMediaQuery();

  const debouncedSearch = useRef(
    debounce((value: string) => {
      setSearchCharacters(value);
      if (currPage) handleSetPage(1);
    }, 300),
  ).current;

  const handleQueryForNavigate = (page: number) => {
    if (location.search) {
      if (!location.search.includes('page=')) {
        return navigate(`${location.search + '&page='}` + page);
      }

      const query = location.search
        .split('?')[1]
        .split('&')
        .map((val) => {
          if (val.includes('page=')) {
            return 'page=' + page;
          }
          return val;
        })
        .join('&');

      return navigate('?' + query);
    }

    return navigate('?page=' + page);
  };

  const handlePreviousPage = (previousPage: number | null) => {
    if (previousPage) {
      setCurrPage(previousPage);
      handleQueryForNavigate(previousPage);
    }
  };

  const handleNextPage = (nextPage: number | null) => {
    if (nextPage) {
      setCurrPage(nextPage);
      handleQueryForNavigate(nextPage);
    }
  };

  const handleSetPage = (page: number) => {
    setCurrPage(page);
    handleQueryForNavigate(page);
  };

  return status === 'loading' ? (
    <>
      <LoadingHeaderAdminList />
      <LoadingRoleList />
    </>
  ) : data ? (
    <>
      <HeaderRoleList totalRole={data?.total} handleSearch={debouncedSearch} />

      {
        !(isXsSmaller || isSmSmaller) ? (
          <TableRoleList
            deleteCheckedRoles={deleteCheckedRoles}
            data={data}
            currPage={currPage}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handleSetPage={handleSetPage}
          />
        ) : (
          <></>
        ) /* (
        
          <TableRoleListMobile
          deleteCheckedAdmins={deleteCheckedAdmins}
          data={data}
          currPage={currPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handleSetPage={handleSetPage}
        />
        
        
      ) */
      }
    </>
  ) : (
    <></>
  );
}

const formSchemaDeleteCheckedRole = yup.object({
  roles: yup.array<any, string>(),
});

function useDeleteCheckedRole() {
  const methods = useForm<IInputDeleteCheckedRole>({
    defaultValues: {
      roles: [],
    },
    resolver: yupResolver(formSchemaDeleteCheckedRole),
  });

  const deleteCheckedRoles = useFieldArray({
    control: methods.control,
    name: 'roles',
  });

  return {
    methods,
    deleteCheckedRoles,
  };
}
