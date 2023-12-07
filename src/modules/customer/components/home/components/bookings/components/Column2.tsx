import clsx from 'clsx';

import Field from 'components/field';
import useGetListBuffetMenuPreview from '../../OurMenu/hooks/useGetListBuffetMenuPreview';

interface Props {
  buffetMenu?: string;
}

export default function Column2({ buffetMenu }: Props) {
  const buffetMenus = useGetListBuffetMenuPreview().data;

  return (
    <div
      className={clsx(
        'flex-1 flex flex-col px-4 max-md:pt-3',
        '[&>div+div]:pt-8',
      )}
    >
      <Field
        t="input"
        name="numberPeople"
        type="number"
        label="Number People"
      />
      <div className="flex max-sm:flex-col max-md:pt-3">
        <div
          className={clsx(
            'w-[50%] mr-4 flex flex-col',
            'max-sm:w-full max-sm:mr-0',
          )}
        >
          <Field
            t="input"
            type="date"
            name="bookingDate"
            label="Booking Date"
            placeholder=" "
          />
        </div>
        <div
          className={clsx(
            'w-[50%] mr-4 flex flex-col',
            'max-sm:w-full max-sm:mr-0 max-sm:pt-3',
          )}
        >
          <Field
            t="input"
            type="time"
            name="bookingTime"
            label="Booking Time"
            placeholder=" "
          />
        </div>
      </div>
      <div>
        {buffetMenus && (
          <Field
            t="select"
            name="buffetMenu"
            label="Buffet Menu"
            defaultSelectedKeys={buffetMenu ? [buffetMenu] : undefined}
            options={buffetMenus.map((buffetMenu) => ({
              label: buffetMenu.name + 'K',
              value: buffetMenu.id,
            }))}
          />
        )}
      </div>

      <div className="flex flex-col max-md:pt-3">
        <Field
          placeholder="Enter note..."
          t="input"
          name="note"
          label="Note"
          isInvalid={false}
        />
      </div>
    </div>
  );
}
