/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CineCreateFormInputValues = {
    nombre?: string;
    Ciudad?: string;
    Estado?: string;
};
export declare type CineCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    Ciudad?: ValidationFunction<string>;
    Estado?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CineCreateFormOverridesProps = {
    CineCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    Ciudad?: PrimitiveOverrideProps<TextFieldProps>;
    Estado?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CineCreateFormProps = React.PropsWithChildren<{
    overrides?: CineCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CineCreateFormInputValues) => CineCreateFormInputValues;
    onSuccess?: (fields: CineCreateFormInputValues) => void;
    onError?: (fields: CineCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CineCreateFormInputValues) => CineCreateFormInputValues;
    onValidate?: CineCreateFormValidationValues;
} & React.CSSProperties>;
export default function CineCreateForm(props: CineCreateFormProps): React.ReactElement;
