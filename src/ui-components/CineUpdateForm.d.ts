/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Cine } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CineUpdateFormInputValues = {
    nombre?: string;
    Ciudad?: string;
    Estado?: string;
};
export declare type CineUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    Ciudad?: ValidationFunction<string>;
    Estado?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CineUpdateFormOverridesProps = {
    CineUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    Ciudad?: PrimitiveOverrideProps<TextFieldProps>;
    Estado?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CineUpdateFormProps = React.PropsWithChildren<{
    overrides?: CineUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cine?: Cine;
    onSubmit?: (fields: CineUpdateFormInputValues) => CineUpdateFormInputValues;
    onSuccess?: (fields: CineUpdateFormInputValues) => void;
    onError?: (fields: CineUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CineUpdateFormInputValues) => CineUpdateFormInputValues;
    onValidate?: CineUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CineUpdateForm(props: CineUpdateFormProps): React.ReactElement;
