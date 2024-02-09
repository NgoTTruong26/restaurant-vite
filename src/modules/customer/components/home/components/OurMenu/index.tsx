import { Button, Tab, Tabs } from '@nextui-org/react';
import { NavBarId } from 'Layout/constant';
import clsx from 'clsx';
import LoadingSetDish from 'modules/customer/components/menu/components/LoadingSetDish';
import { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import DishesListPreview from './components/DishesListPreview';
import LoadingDishesList from './components/LoadingDishesList';
import useGetListBuffetMenuPreview from './hooks/useGetListBuffetMenuPreview';

interface Props {
  slidesPerView: number | null;
}

export default function OurMenu({ slidesPerView }: Props) {
  const [buffet, setBuffet] = useState<string>();
  const [setDish, setSetDish] = useState<string>();

  const navigate = useNavigate();

  const { data, status } = useGetListBuffetMenuPreview();

  useEffect(() => {
    if (data) {
      const specialMenu = data.find((menu) => menu.special === true);
      const specialSetDish = specialMenu?.setDishes?.find(
        (menu) => menu.special === true,
      );

      setBuffet(specialMenu?.id);
      setSetDish(specialSetDish?.id);
    }
  }, [data]);

  const handleSetBuffet = (argBuffet: string) => {
    if (argBuffet !== buffet) {
      setBuffet(argBuffet);
      if (data) {
        const specialMenu = data.find((menu) => menu.id === argBuffet);
        const specialSetDish = specialMenu?.setDishes?.find(
          (menu) => menu.special === true,
        );
        setSetDish(specialSetDish?.id);
      }
    }
  };

  return (
    <div id={NavBarId.OUR_MENU} className="flex justify-center py-16 px-5">
      <div className="flex flex-col max-w-[1200px] w-full items-center">
        <div className="capitalize">Our Menu</div>
        <div
          className={clsx(
            'capitalize font-amatic text-[48px] text-center',
            'max-xs:text-[38px]',
          )}
        >
          {'Check Our '}
          <span
            className={clsx('text-primary text-[48px]', 'max-xs:text-[38px]')}
          >
            Yummy Menu
          </span>
        </div>
        <div className="flex justify-center pb-5 w-full min-h-[560px]">
          <div className="flex flex-col items-center w-full">
            <div>Menu</div>
            <div
              className={clsx(
                'text-[36px] text-primary pb-5 font-medium',
                'max-sm:text-[30px]',
              )}
            >
              Main Dishes
            </div>
            {status === 'loading' ? (
              <div>
                <LoadingSetDish />
                <LoadingDishesList slidesPerView={slidesPerView} />
              </div>
            ) : (
              <Tabs
                key="lg"
                size="lg"
                color="primary"
                selectedKey={buffet}
                onSelectionChange={(buffetId) => {
                  handleSetBuffet(buffetId as string);
                }}
                classNames={{
                  tabContent: 'font-medium',
                }}
                className="overflow-hidden w-full max-w-[fit-content]"
              >
                {data?.map((buffetMenu) => (
                  <Tab
                    key={buffetMenu.id}
                    title={`Set${buffetMenu.name}K`}
                    className="w-full"
                  >
                    <DishesListPreview
                      slidesPerView={slidesPerView}
                      buffet={buffet || ''}
                      setDish={setDish || ''}
                    />
                  </Tab>
                ))}
              </Tabs>
            )}
          </div>
        </div>

        <Button
          color="primary"
          onClick={() => {
            navigate('/dish-menu', { preventScrollReset: true });
          }}
        >
          See more
          <span>
            <IoIosArrowForward />
          </span>
        </Button>
      </div>
    </div>
  );
}
