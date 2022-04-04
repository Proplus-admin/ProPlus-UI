import { EToaster } from "../enums/toaster";

export interface IToaster {
    message: string;
    type: EToaster.Success | EToaster.Failed | EToaster.Warning;
}
