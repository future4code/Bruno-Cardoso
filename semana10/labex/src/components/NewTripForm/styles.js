import styled from "styled-components";

export const TripsContainer = styled.div`
  width: 50vw;
  padding-top: 5vh;
  display: flex;
  justify-content: center;
`;

export const TripsTitle = styled.h2`
  text-transform: uppercase;
`;

export const TripsForm = styled.form`
  width: 45vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const InputTrips = styled.input`
  width: 30vw;
  height: 7vh;
  padding: 0 10px;
  border: 2px solid #000;
  border-radius: 12px;
  font-size: 20px;
`;

export const SelectTrips = styled.select`
  width: 30vw;
  height: 7vh;
  padding: 0 10px;
  border: 2px solid #000;
  border-radius: 12px;
  font-size: 20px;
`;

export const OptionTrips = styled.option`
  width: 30vw;
  height: 7vh;
  padding: 0 10px;
  border: 2px solid #000;
  border-radius: 12px;
  font-size: 20px;
`;

export const ButtonTrips = styled.button`
  width: 20vw;
  height: 7vh;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  background-color: #fff000;
`;
