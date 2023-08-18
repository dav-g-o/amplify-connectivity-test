/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Institucion } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InstitucionUpdateFormInputValues = {
    nombre?: string;
    nombreRep?: string;
};
export declare type InstitucionUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    nombreRep?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstitucionUpdateFormOverridesProps = {
    InstitucionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    nombreRep?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InstitucionUpdateFormProps = React.PropsWithChildren<{
    overrides?: InstitucionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    institucion?: Institucion;
    onSubmit?: (fields: InstitucionUpdateFormInputValues) => InstitucionUpdateFormInputValues;
    onSuccess?: (fields: InstitucionUpdateFormInputValues) => void;
    onError?: (fields: InstitucionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InstitucionUpdateFormInputValues) => InstitucionUpdateFormInputValues;
    onValidate?: InstitucionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InstitucionUpdateForm(props: InstitucionUpdateFormProps): React.ReactElement;
