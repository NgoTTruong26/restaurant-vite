import { Pagination } from '@nextui-org/react';
import PaginationMobile from 'components/PaginationMobile';
import useMediaQuery from 'hooks/useMediaQuery';
import { GetRoleListDTO } from '../../dto/get-roles.dto';

interface Props {
  currPage: number;
  data: GetRoleListDTO;
  countCheckedRoles: number;
  handlePreviousPage: (previousPage: number | null) => void;
  handleSetPage: (page: number) => void;
  handleNextPage: (nextPage: number | null) => void;
}

export interface InputNavigatePage {
  page: number;
}

const FooterRoleList: React.FC<Props> = ({
  data,
  currPage,
  countCheckedRoles,

  handleSetPage,
}) => {
  const { isSmSmaller, isXsSmaller } = useMediaQuery();

  return isXsSmaller || isSmSmaller ? (
    <PaginationMobile
      handleSetPage={handleSetPage}
      page={currPage}
      total={data.totalPages}
    />
  ) : (
    <div className="py-2 px-2 flex justify-between items-center">
      <Pagination
        showControls
        color="primary"
        page={currPage}
        total={data.totalPages}
        variant="light"
        onChange={handleSetPage}
      />
      {data.total && (
        <span className="text-default-400 text-medium">
          {`${countCheckedRoles} of ${data.total} selected`}
        </span>
      )}
    </div>
  );
};

export default FooterRoleList;
