/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InstitucionCreateFormInputValues = {
    nombre?: string;
    nombreRep?: string;
};
export declare type InstitucionCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    nombreRep?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstitucionCreateFormOverridesProps = {
    InstitucionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    nombreRep?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InstitucionCreateFormProps = React.PropsWithChildren<{
    overrides?: InstitucionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InstitucionCreateFormInputValues) => InstitucionCreateFormInputValues;
    onSuccess?: (fields: InstitucionCreateFormInputValues) => void;
    onError?: (fields: InstitucionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InstitucionCreateFormInputValues) => InstitucionCreateFormInputValues;
    onValidate?: InstitucionCreateFormValidationValues;
} & React.CSSProperties>;
export default function InstitucionCreateForm(props: InstitucionCreateFormProps): React.ReactElement;
