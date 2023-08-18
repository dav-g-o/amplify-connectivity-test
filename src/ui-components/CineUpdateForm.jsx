/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Cine } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CineUpdateForm(props) {
  const {
    id: idProp,
    cine: cineModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombre: "",
    Ciudad: "",
    Estado: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [Ciudad, setCiudad] = React.useState(initialValues.Ciudad);
  const [Estado, setEstado] = React.useState(initialValues.Estado);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cineRecord
      ? { ...initialValues, ...cineRecord }
      : initialValues;
    setNombre(cleanValues.nombre);
    setCiudad(cleanValues.Ciudad);
    setEstado(cleanValues.Estado);
    setErrors({});
  };
  const [cineRecord, setCineRecord] = React.useState(cineModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Cine, idProp)
        : cineModelProp;
      setCineRecord(record);
    };
    queryData();
  }, [idProp, cineModelProp]);
  React.useEffect(resetStateValues, [cineRecord]);
  const validations = {
    nombre: [{ type: "Required" }],
    Ciudad: [{ type: "Required" }],
    Estado: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nombre,
          Ciudad,
          Estado,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Cine.copyOf(cineRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CineUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={true}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              Ciudad,
              Estado,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
      ></TextField>
      <TextField
        label="Ciudad"
        isRequired={true}
        isReadOnly={false}
        value={Ciudad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              Ciudad: value,
              Estado,
            };
            const result = onChange(modelFields);
            value = result?.Ciudad ?? value;
          }
          if (errors.Ciudad?.hasError) {
            runValidationTasks("Ciudad", value);
          }
          setCiudad(value);
        }}
        onBlur={() => runValidationTasks("Ciudad", Ciudad)}
        errorMessage={errors.Ciudad?.errorMessage}
        hasError={errors.Ciudad?.hasError}
        {...getOverrideProps(overrides, "Ciudad")}
      ></TextField>
      <SelectField
        label="Estado"
        placeholder="Please select an option"
        isDisabled={false}
        value={Estado}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              Ciudad,
              Estado: value,
            };
            const result = onChange(modelFields);
            value = result?.Estado ?? value;
          }
          if (errors.Estado?.hasError) {
            runValidationTasks("Estado", value);
          }
          setEstado(value);
        }}
        onBlur={() => runValidationTasks("Estado", Estado)}
        errorMessage={errors.Estado?.errorMessage}
        hasError={errors.Estado?.hasError}
        {...getOverrideProps(overrides, "Estado")}
      >
        <option
          children="Cdmx"
          value="CDMX"
          {...getOverrideProps(overrides, "Estadooption0")}
        ></option>
        <option
          children="Chihuahua"
          value="Chihuahua"
          {...getOverrideProps(overrides, "Estadooption1")}
        ></option>
        <option
          children="Coahuila"
          value="Coahuila"
          {...getOverrideProps(overrides, "Estadooption2")}
        ></option>
        <option
          children="Jalisco"
          value="Jalisco"
          {...getOverrideProps(overrides, "Estadooption3")}
        ></option>
        <option
          children="Nuevoleon"
          value="NUEVOLEON"
          {...getOverrideProps(overrides, "Estadooption4")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || cineModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || cineModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
