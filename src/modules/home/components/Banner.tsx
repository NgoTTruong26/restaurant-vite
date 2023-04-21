export default function Banner({ srcImg }: { srcImg: string }) {
  return (
    <div
      style={{ backgroundImage: srcImg }}
      className="flex min-h-[250px] justify-center p-[100px] bg-cover bg-no-repeat bg-fixed"
    >
      <div className="flex"></div>
    </div>
  );
}
