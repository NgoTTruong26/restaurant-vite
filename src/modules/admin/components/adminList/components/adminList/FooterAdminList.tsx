import { Pagination } from '@nextui-org/react';
import PaginationMobile from 'components/PaginationMobile';
import useMediaQuery from 'hooks/useMediaQuery';

interface Props {
  totalPages: number;
  currPage: number;
  countCheckedAdmins: number;
  totalAdmins?: number;
  handleSetPage: (page: number) => void;
}

export interface InputNavigatePage {
  page: number;
}

const FooterAdminList: React.FC<Props> = ({
  currPage,
  handleSetPage,
  totalPages,
  countCheckedAdmins,
  totalAdmins,
}) => {
  const { isSmSmaller, isXsSmaller } = useMediaQuery();

  return isXsSmaller || isSmSmaller ? (
    <PaginationMobile
      handleSetPage={handleSetPage}
      page={currPage}
      total={totalPages}
    />
  ) : (
    <div className="py-2 px-2 flex justify-between items-center">
      <Pagination
        showControls
        color="primary"
        page={currPage}
        total={totalPages}
        variant="light"
        onChange={handleSetPage}
      />
      {totalAdmins && (
        <span className="text-default-400 text-medium">
          {`${countCheckedAdmins} of ${totalAdmins} selected`}
        </span>
      )}
    </div>
  );
};

export default FooterAdminList;
