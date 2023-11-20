import clsx from 'clsx';
import { GrFormClose } from 'react-icons/gr';
import { GetRoleDTO } from '../../adminList/dto/get-roles.dto';

interface Props {
  roles: GetRoleDTO[];
  handleCloseShowRoleListDetail: () => void;
}

export default function RoleListDetail({
  roles,
  handleCloseShowRoleListDetail,
}: Props) {
  return (
    <div
      className={clsx(
        'absolute flex justify-center items-center top-0 left-0 z-20 w-full h-full bg-[#0009] overflow-hidden ',
      )}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="z-30 px-5 max-w-[500px] w-full animate-drop-top opacity-100 transition-all duration-100"
      >
        <div className="bg-[#ffffff] rounded-lg p-8 pb-6">
          <span className="sticky flex justify-end right-4 top-0 ">
            <GrFormClose
              className="hover:cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleCloseShowRoleListDetail();
              }}
              size={25}
            />
          </span>
          <div className="pb-3 border-b ">Danh sách chức vụ:</div>
          <div className={clsx('flex flex-wrap gap-3 pt-4')}>
            {roles.map((role, idx) => (
              <div
                key={idx}
                className="badge badge-accent badge-outline badge-lg"
              >
                {role.position}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
