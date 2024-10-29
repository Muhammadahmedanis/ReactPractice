import { useContext } from "react";
import { createContext} from "react";

const Form = createContext(null);

// export default Form;

export const FormProvider = Form.Provider;
export default function useForm() {
    return useContext(Form)
}