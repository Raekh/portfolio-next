import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

type GridProps = {};

const Grid = (params: GridProps) => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            spareImg,
            imgClassName,
            titleClassName,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          ),
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
