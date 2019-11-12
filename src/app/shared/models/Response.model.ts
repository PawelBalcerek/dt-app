import { ExecDetails } from './ExecDetails.model';

export interface Response<T>{
    content: T,
    execDetails:ExecDetails
}