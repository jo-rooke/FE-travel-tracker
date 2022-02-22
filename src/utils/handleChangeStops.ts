import { IStopAdding } from "../interfaces/IStop";

export const handleChangeStops = (
  e:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>
    | React.ChangeEvent<HTMLTextAreaElement>,
  state: IStopAdding,
  setState: React.Dispatch<React.SetStateAction<IStopAdding>>
) => {
  setState({ ...state, [e.target.name]: e.target.value });
};
