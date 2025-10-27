import type { Address } from "@shared/common/address";
import type { ReactNode } from "react";
import { DetailsContainer } from "../ui/details/detailsContainer";
import { DetailsLi } from "../ui/details/detailsLi";
import { DetailsTitle } from "../ui/details/detailsTitle";
import { DetailsUl } from "../ui/details/detailsUl";
import { DetailsSubTitle } from "../ui/details/detailsSubTitle";

type ClientDetailsProps = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: Address;
  slot?: ReactNode;
};

export default function ClientDetails(props: ClientDetailsProps) {
  return (
    <DetailsContainer>
      <div className="flex justify-between">
        <DetailsTitle>{props.name}</DetailsTitle>
        {props.slot}
      </div>
      <div className="w-full h-full flex md:flex-row flex-col gap-4 md:justify-between">
        <DetailsContainer>
          <DetailsUl>
            <DetailsLi label="email">{props.email}</DetailsLi>
            <DetailsLi label="phone">{props.phone}</DetailsLi>
          </DetailsUl>
        </DetailsContainer>
        <DetailsContainer>
          <DetailsSubTitle>Address</DetailsSubTitle>
          <DetailsUl>
            <DetailsLi label="street">{props.address?.street ?? "_"}</DetailsLi>
            <DetailsLi label="number">{props.address?.number ?? "_"}</DetailsLi>
            <DetailsLi label="city">{props.address?.city ?? "_"}</DetailsLi>
            <DetailsLi label="postal code">
              {props.address?.postalCode ?? "_"}
            </DetailsLi>
            <DetailsLi label="country">
              {props.address?.country ?? "_"}
            </DetailsLi>
          </DetailsUl>
        </DetailsContainer>
      </div>
    </DetailsContainer>
  );
}
