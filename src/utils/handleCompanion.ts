import { ICompanion, IStopAdding } from "../interfaces/IStop";
import { initialNewCompanion } from "../interfaces/IStop";

export const handleCompanion = (
  e: React.ChangeEvent<HTMLInputElement>,
  state: ICompanion,
  setState: React.Dispatch<React.SetStateAction<ICompanion>>
) => {
  setState({ ...state, [e.target.name]: e.target.value });
};

export const handleAddCompanion = (
  companion: ICompanion,
  setCompanion: React.Dispatch<React.SetStateAction<ICompanion>>,
  newStop: IStopAdding,
  setNewStop: React.Dispatch<React.SetStateAction<IStopAdding>>
) => {
  setNewStop({ ...newStop, companions: [...newStop.companions, companion] });
  setCompanion(initialNewCompanion);
};
