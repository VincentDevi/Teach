import type { ReactNode } from "react";
import { DetailsContainer } from "../ui/details/detailsContainer";
import { DetailsLi } from "../ui/details/detailsLi";
import { DetailsTitle } from "../ui/details/detailsTitle";
import { DetailsUl } from "../ui/details/detailsUl";

type CarDetailsProps = {
  id: string;
  model: string;
  brand: string;
  year: number;
  oilType: string;
  oilQuantity: number;
  cc: number;
  slot?: ReactNode;
};

export default function CarDetails(props: CarDetailsProps) {
  return (
    <DetailsContainer>
      <div className="flex justify-between">
        <DetailsTitle>{props.id}</DetailsTitle>
        {props.slot}
      </div>
      <DetailsContainer>
        <DetailsUl>
          <DetailsLi label="Model">{props.model}</DetailsLi>
          <DetailsLi label="Brand">{props.brand}</DetailsLi>
          <DetailsLi label="Year">{props.year}</DetailsLi>
        </DetailsUl>
      </DetailsContainer>
      <DetailsContainer>
        <DetailsUl>
          <DetailsLi label="oil Type">{props.oilType}</DetailsLi>
          <DetailsLi label="oil Quantity">{props.oilQuantity}</DetailsLi>
          <DetailsLi label="cc">{props.cc}</DetailsLi>
        </DetailsUl>
      </DetailsContainer>
    </DetailsContainer>
  );
}
