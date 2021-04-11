import React from 'react';

import Button from 'src/components/atom/Button';

interface Props {
  onClick: () => void;
}

const Main: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="flex-shrink-0 w-full flex flex-col">
      <div className="my-auto">
        <div className="flex items-end">
          <div className="flex w-[184px] h-[184px]">
            <img src="main.png" alt="" />
          </div>
          <h1 className="pb-5">
            <p className="font-bold text-[32px]">
              쇼미더<span className="text-PRIMARY">기부</span>
            </p>
            <p className="font-bold">
              나와 맞는 기부 방법을
              <br />
              알아보는 기부 성향 테스트
            </p>
          </h1>
        </div>

        <Button className="text-WHITE bg-PRIMARY mx-auto" onClick={onClick}>
          시작하기
        </Button>
      </div>
    </div>
  );
};

export default Main;
