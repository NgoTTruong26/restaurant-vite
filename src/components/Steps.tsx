import { Avatar } from '@nextui-org/react';
import clsx from 'clsx';

export interface Step {
  step: number;
  label: string | number;
}

interface Props {
  arrSteps: Step[];
  currentStep: number;
  classWrapp?: string;
  classItems?: string;
  classProgress?: string;
}

export default function Steps({
  arrSteps,
  currentStep,
  classProgress,
  classItems,
}: Props) {
  arrSteps.sort((next, curr) => {
    return next.step - curr.step;
  });

  console.log(arrSteps);

  return (
    <div className="w-full">
      <ul
        className={clsx(
          `grid grid-cols-${arrSteps.length}`,
          '[&>li+li]:before:h-2 [&>li+li]:before:w-full [&>li+li]:before:bg-zinc-300 [&>li+li]:before:ms-[-100%] [&>li+li]:before:row-start-1 [&>li+li]:before:col-start-1',
        )}
      >
        {arrSteps.map((step, idx) => (
          <li
            key={idx + 1}
            className={clsx(
              'w-full grid place-items-center min-w-[60px] space-y-1',
              {
                'before:!bg-primary': idx + 1 !== 1 && idx + 1 <= currentStep,
              },
              classProgress,
            )}
          >
            <Avatar
              size="sm"
              name={(idx + 1).toString()}
              className={clsx(
                'text-white row-start-1 col-start-1 bg-zinc-300',
                {
                  'bg-primary': idx + 1 <= currentStep,
                },
                classItems,
              )}
            />
            <span className="text-primary capitalize">
              {step.label.toString().toLowerCase()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
