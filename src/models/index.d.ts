import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Estado {
  CDMX = "CDMX",
  CHIHUAHUA = "Chihuahua",
  COAHUILA = "Coahuila",
  JALISCO = "Jalisco",
  NUEVOLEON = "NUEVOLEON"
}



type EagerCine = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cine, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly Ciudad: string;
  readonly Estado: Estado | keyof typeof Estado;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCine = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cine, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly Ciudad: string;
  readonly Estado: Estado | keyof typeof Estado;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cine = LazyLoading extends LazyLoadingDisabled ? EagerCine : LazyCine

export declare const Cine: (new (init: ModelInit<Cine>) => Cine) & {
  copyOf(source: Cine, mutator: (draft: MutableModel<Cine>) => MutableModel<Cine> | void): Cine;
}

type EagerInstitucion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Institucion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly nombreRep: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInstitucion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Institucion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly nombreRep: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Institucion = LazyLoading extends LazyLoadingDisabled ? EagerInstitucion : LazyInstitucion

export declare const Institucion: (new (init: ModelInit<Institucion>) => Institucion) & {
  copyOf(source: Institucion, mutator: (draft: MutableModel<Institucion>) => MutableModel<Institucion> | void): Institucion;
}