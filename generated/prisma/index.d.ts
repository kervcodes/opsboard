
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Incident
 * 
 */
export type Incident = $Result.DefaultSelection<Prisma.$IncidentPayload>
/**
 * Model IncidentEvent
 * 
 */
export type IncidentEvent = $Result.DefaultSelection<Prisma.$IncidentEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  OPEN: 'OPEN',
  INVESTIGATING: 'INVESTIGATING',
  IDENTIFIED: 'IDENTIFIED',
  MITIGATED: 'MITIGATED',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED',
  DISCARDED: 'DISCARDED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Severity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type Severity = (typeof Severity)[keyof typeof Severity]


export const CommentType: {
  USER_UPDATE: 'USER_UPDATE',
  SYSTEM_EVENT: 'SYSTEM_EVENT'
};

export type CommentType = (typeof CommentType)[keyof typeof CommentType]


export const EventType: {
  INCIDENT_CREATED: 'INCIDENT_CREATED',
  STATUS_CHANGED: 'STATUS_CHANGED',
  SEVERITY_CHANGED: 'SEVERITY_CHANGED',
  OWNER_CHANGED: 'OWNER_CHANGED'
};

export type EventType = (typeof EventType)[keyof typeof EventType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Severity = $Enums.Severity

export const Severity: typeof $Enums.Severity

export type CommentType = $Enums.CommentType

export const CommentType: typeof $Enums.CommentType

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incident`: Exposes CRUD operations for the **Incident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incident.findMany()
    * ```
    */
  get incident(): Prisma.IncidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidentEvent`: Exposes CRUD operations for the **IncidentEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncidentEvents
    * const incidentEvents = await prisma.incidentEvent.findMany()
    * ```
    */
  get incidentEvent(): Prisma.IncidentEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Comment: 'Comment',
    Incident: 'Incident',
    IncidentEvent: 'IncidentEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "comment" | "incident" | "incidentEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Incident: {
        payload: Prisma.$IncidentPayload<ExtArgs>
        fields: Prisma.IncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findFirst: {
            args: Prisma.IncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findMany: {
            args: Prisma.IncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          create: {
            args: Prisma.IncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          createMany: {
            args: Prisma.IncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          delete: {
            args: Prisma.IncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          update: {
            args: Prisma.IncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          deleteMany: {
            args: Prisma.IncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          upsert: {
            args: Prisma.IncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          aggregate: {
            args: Prisma.IncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncident>
          }
          groupBy: {
            args: Prisma.IncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentCountAggregateOutputType> | number
          }
        }
      }
      IncidentEvent: {
        payload: Prisma.$IncidentEventPayload<ExtArgs>
        fields: Prisma.IncidentEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload>
          }
          findFirst: {
            args: Prisma.IncidentEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload>
          }
          findMany: {
            args: Prisma.IncidentEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload>[]
          }
          create: {
            args: Prisma.IncidentEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload>
          }
          createMany: {
            args: Prisma.IncidentEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload>[]
          }
          delete: {
            args: Prisma.IncidentEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload>
          }
          update: {
            args: Prisma.IncidentEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload>
          }
          deleteMany: {
            args: Prisma.IncidentEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload>[]
          }
          upsert: {
            args: Prisma.IncidentEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload>
          }
          aggregate: {
            args: Prisma.IncidentEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidentEvent>
          }
          groupBy: {
            args: Prisma.IncidentEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentEventCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    comment?: CommentOmit
    incident?: IncidentOmit
    incidentEvent?: IncidentEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedIncidents: number
    createdIncidents: number
    actedIncidentEvents: number
    comments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedIncidents?: boolean | UserCountOutputTypeCountOwnedIncidentsArgs
    createdIncidents?: boolean | UserCountOutputTypeCountCreatedIncidentsArgs
    actedIncidentEvents?: boolean | UserCountOutputTypeCountActedIncidentEventsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActedIncidentEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type IncidentCountOutputType
   */

  export type IncidentCountOutputType = {
    comments: number
    events: number
  }

  export type IncidentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | IncidentCountOutputTypeCountCommentsArgs
    events?: boolean | IncidentCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentCountOutputType
     */
    select?: IncidentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    ownedIncidents?: boolean | User$ownedIncidentsArgs<ExtArgs>
    createdIncidents?: boolean | User$createdIncidentsArgs<ExtArgs>
    actedIncidentEvents?: boolean | User$actedIncidentEventsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedIncidents?: boolean | User$ownedIncidentsArgs<ExtArgs>
    createdIncidents?: boolean | User$createdIncidentsArgs<ExtArgs>
    actedIncidentEvents?: boolean | User$actedIncidentEventsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedIncidents: Prisma.$IncidentPayload<ExtArgs>[]
      createdIncidents: Prisma.$IncidentPayload<ExtArgs>[]
      actedIncidentEvents: Prisma.$IncidentEventPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedIncidents<T extends User$ownedIncidentsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedIncidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdIncidents<T extends User$createdIncidentsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdIncidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actedIncidentEvents<T extends User$actedIncidentEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$actedIncidentEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ownedIncidents
   */
  export type User$ownedIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * User.createdIncidents
   */
  export type User$createdIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * User.actedIncidentEvents
   */
  export type User$actedIncidentEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    where?: IncidentEventWhereInput
    orderBy?: IncidentEventOrderByWithRelationInput | IncidentEventOrderByWithRelationInput[]
    cursor?: IncidentEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentEventScalarFieldEnum | IncidentEventScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    incidentId: string | null
    authorId: string | null
    message: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    incidentId: string | null
    authorId: string | null
    message: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    incidentId: number
    authorId: number
    message: number
    createdAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    incidentId?: true
    authorId?: true
    message?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    incidentId?: true
    authorId?: true
    message?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    incidentId?: true
    authorId?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    incidentId: string
    authorId: string
    message: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    authorId?: boolean
    message?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    authorId?: boolean
    message?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    authorId?: boolean
    message?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    incidentId?: boolean
    authorId?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "incidentId" | "authorId" | "message" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      incident: Prisma.$IncidentPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      incidentId: string
      authorId: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incident<T extends IncidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncidentDefaultArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly incidentId: FieldRef<"Comment", 'String'>
    readonly authorId: FieldRef<"Comment", 'String'>
    readonly message: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Incident
   */

  export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  export type IncidentAvgAggregateOutputType = {
    slaTargetMinutes: number | null
    version: number | null
  }

  export type IncidentSumAggregateOutputType = {
    slaTargetMinutes: number | null
    version: number | null
  }

  export type IncidentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    severity: $Enums.Severity | null
    status: $Enums.Status | null
    acknowledgedAt: Date | null
    resolvedAt: Date | null
    closedAt: Date | null
    currentSlaStartAt: Date | null
    slaTargetMinutes: number | null
    ownerId: string | null
    createdById: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    severity: $Enums.Severity | null
    status: $Enums.Status | null
    acknowledgedAt: Date | null
    resolvedAt: Date | null
    closedAt: Date | null
    currentSlaStartAt: Date | null
    slaTargetMinutes: number | null
    ownerId: string | null
    createdById: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    severity: number
    status: number
    acknowledgedAt: number
    resolvedAt: number
    closedAt: number
    currentSlaStartAt: number
    slaTargetMinutes: number
    ownerId: number
    createdById: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IncidentAvgAggregateInputType = {
    slaTargetMinutes?: true
    version?: true
  }

  export type IncidentSumAggregateInputType = {
    slaTargetMinutes?: true
    version?: true
  }

  export type IncidentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    severity?: true
    status?: true
    acknowledgedAt?: true
    resolvedAt?: true
    closedAt?: true
    currentSlaStartAt?: true
    slaTargetMinutes?: true
    ownerId?: true
    createdById?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    severity?: true
    status?: true
    acknowledgedAt?: true
    resolvedAt?: true
    closedAt?: true
    currentSlaStartAt?: true
    slaTargetMinutes?: true
    ownerId?: true
    createdById?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    severity?: true
    status?: true
    acknowledgedAt?: true
    resolvedAt?: true
    closedAt?: true
    currentSlaStartAt?: true
    slaTargetMinutes?: true
    ownerId?: true
    createdById?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incident to aggregate.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidents
    **/
    _count?: true | IncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMaxAggregateInputType
  }

  export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncident[P]>
      : GetScalarType<T[P], AggregateIncident[P]>
  }




  export type IncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithAggregationInput | IncidentOrderByWithAggregationInput[]
    by: IncidentScalarFieldEnum[] | IncidentScalarFieldEnum
    having?: IncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentCountAggregateInputType | true
    _avg?: IncidentAvgAggregateInputType
    _sum?: IncidentSumAggregateInputType
    _min?: IncidentMinAggregateInputType
    _max?: IncidentMaxAggregateInputType
  }

  export type IncidentGroupByOutputType = {
    id: string
    title: string
    description: string
    severity: $Enums.Severity | null
    status: $Enums.Status
    acknowledgedAt: Date | null
    resolvedAt: Date | null
    closedAt: Date | null
    currentSlaStartAt: Date
    slaTargetMinutes: number | null
    ownerId: string
    createdById: string
    version: number
    createdAt: Date
    updatedAt: Date
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentGroupByOutputType[P]>
        }
      >
    >


  export type IncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    severity?: boolean
    status?: boolean
    acknowledgedAt?: boolean
    resolvedAt?: boolean
    closedAt?: boolean
    currentSlaStartAt?: boolean
    slaTargetMinutes?: boolean
    ownerId?: boolean
    createdById?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Incident$commentsArgs<ExtArgs>
    events?: boolean | Incident$eventsArgs<ExtArgs>
    _count?: boolean | IncidentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    severity?: boolean
    status?: boolean
    acknowledgedAt?: boolean
    resolvedAt?: boolean
    closedAt?: boolean
    currentSlaStartAt?: boolean
    slaTargetMinutes?: boolean
    ownerId?: boolean
    createdById?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    severity?: boolean
    status?: boolean
    acknowledgedAt?: boolean
    resolvedAt?: boolean
    closedAt?: boolean
    currentSlaStartAt?: boolean
    slaTargetMinutes?: boolean
    ownerId?: boolean
    createdById?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    severity?: boolean
    status?: boolean
    acknowledgedAt?: boolean
    resolvedAt?: boolean
    closedAt?: boolean
    currentSlaStartAt?: boolean
    slaTargetMinutes?: boolean
    ownerId?: boolean
    createdById?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "severity" | "status" | "acknowledgedAt" | "resolvedAt" | "closedAt" | "currentSlaStartAt" | "slaTargetMinutes" | "ownerId" | "createdById" | "version" | "createdAt" | "updatedAt", ExtArgs["result"]["incident"]>
  export type IncidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Incident$commentsArgs<ExtArgs>
    events?: boolean | Incident$eventsArgs<ExtArgs>
    _count?: boolean | IncidentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incident"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      events: Prisma.$IncidentEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      severity: $Enums.Severity | null
      status: $Enums.Status
      acknowledgedAt: Date | null
      resolvedAt: Date | null
      closedAt: Date | null
      currentSlaStartAt: Date
      slaTargetMinutes: number | null
      ownerId: string
      createdById: string
      version: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["incident"]>
    composites: {}
  }

  type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = $Result.GetResult<Prisma.$IncidentPayload, S>

  type IncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentCountAggregateInputType | true
    }

  export interface IncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incident'], meta: { name: 'Incident' } }
    /**
     * Find zero or one Incident that matches the filter.
     * @param {IncidentFindUniqueArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentFindUniqueArgs>(args: SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentFindUniqueOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentFindFirstArgs>(args?: SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incident.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentWithIdOnly = await prisma.incident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentFindManyArgs>(args?: SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incident.
     * @param {IncidentCreateArgs} args - Arguments to create a Incident.
     * @example
     * // Create one Incident
     * const Incident = await prisma.incident.create({
     *   data: {
     *     // ... data to create a Incident
     *   }
     * })
     * 
     */
    create<T extends IncidentCreateArgs>(args: SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidents.
     * @param {IncidentCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentCreateManyArgs>(args?: SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incidents and returns the data saved in the database.
     * @param {IncidentCreateManyAndReturnArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Incident.
     * @param {IncidentDeleteArgs} args - Arguments to delete one Incident.
     * @example
     * // Delete one Incident
     * const Incident = await prisma.incident.delete({
     *   where: {
     *     // ... filter to delete one Incident
     *   }
     * })
     * 
     */
    delete<T extends IncidentDeleteArgs>(args: SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incident.
     * @param {IncidentUpdateArgs} args - Arguments to update one Incident.
     * @example
     * // Update one Incident
     * const incident = await prisma.incident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateArgs>(args: SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidents.
     * @param {IncidentDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentDeleteManyArgs>(args?: SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents and returns the data updated in the database.
     * @param {IncidentUpdateManyAndReturnArgs} args - Arguments to update many Incidents.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Incident.
     * @param {IncidentUpsertArgs} args - Arguments to update or create a Incident.
     * @example
     * // Update or create a Incident
     * const incident = await prisma.incident.upsert({
     *   create: {
     *     // ... data to create a Incident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incident we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpsertArgs>(args: SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incident.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends IncidentCountArgs>(
      args?: Subset<T, IncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentAggregateArgs>(args: Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>

    /**
     * Group by Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentGroupByArgs['orderBy'] }
        : { orderBy?: IncidentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incident model
   */
  readonly fields: IncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Incident$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Incident$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Incident$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Incident$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Incident model
   */
  interface IncidentFieldRefs {
    readonly id: FieldRef<"Incident", 'String'>
    readonly title: FieldRef<"Incident", 'String'>
    readonly description: FieldRef<"Incident", 'String'>
    readonly severity: FieldRef<"Incident", 'Severity'>
    readonly status: FieldRef<"Incident", 'Status'>
    readonly acknowledgedAt: FieldRef<"Incident", 'DateTime'>
    readonly resolvedAt: FieldRef<"Incident", 'DateTime'>
    readonly closedAt: FieldRef<"Incident", 'DateTime'>
    readonly currentSlaStartAt: FieldRef<"Incident", 'DateTime'>
    readonly slaTargetMinutes: FieldRef<"Incident", 'Int'>
    readonly ownerId: FieldRef<"Incident", 'String'>
    readonly createdById: FieldRef<"Incident", 'String'>
    readonly version: FieldRef<"Incident", 'Int'>
    readonly createdAt: FieldRef<"Incident", 'DateTime'>
    readonly updatedAt: FieldRef<"Incident", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Incident findUnique
   */
  export type IncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findUniqueOrThrow
   */
  export type IncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findFirst
   */
  export type IncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findFirstOrThrow
   */
  export type IncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findMany
   */
  export type IncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident create
   */
  export type IncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Incident.
     */
    data: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
  }

  /**
   * Incident createMany
   */
  export type IncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incident createManyAndReturn
   */
  export type IncidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident update
   */
  export type IncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Incident.
     */
    data: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
    /**
     * Choose, which Incident to update.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident updateMany
   */
  export type IncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incident updateManyAndReturn
   */
  export type IncidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident upsert
   */
  export type IncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Incident to update in case it exists.
     */
    where: IncidentWhereUniqueInput
    /**
     * In case the Incident found by the `where` argument doesn't exist, create a new Incident with this data.
     */
    create: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
    /**
     * In case the Incident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
  }

  /**
   * Incident delete
   */
  export type IncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter which Incident to delete.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident deleteMany
   */
  export type IncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to delete
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to delete.
     */
    limit?: number
  }

  /**
   * Incident.comments
   */
  export type Incident$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Incident.events
   */
  export type Incident$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    where?: IncidentEventWhereInput
    orderBy?: IncidentEventOrderByWithRelationInput | IncidentEventOrderByWithRelationInput[]
    cursor?: IncidentEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentEventScalarFieldEnum | IncidentEventScalarFieldEnum[]
  }

  /**
   * Incident without action
   */
  export type IncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
  }


  /**
   * Model IncidentEvent
   */

  export type AggregateIncidentEvent = {
    _count: IncidentEventCountAggregateOutputType | null
    _min: IncidentEventMinAggregateOutputType | null
    _max: IncidentEventMaxAggregateOutputType | null
  }

  export type IncidentEventMinAggregateOutputType = {
    id: string | null
    incidentId: string | null
    actorId: string | null
    eventType: $Enums.EventType | null
    createdAt: Date | null
  }

  export type IncidentEventMaxAggregateOutputType = {
    id: string | null
    incidentId: string | null
    actorId: string | null
    eventType: $Enums.EventType | null
    createdAt: Date | null
  }

  export type IncidentEventCountAggregateOutputType = {
    id: number
    incidentId: number
    actorId: number
    eventType: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type IncidentEventMinAggregateInputType = {
    id?: true
    incidentId?: true
    actorId?: true
    eventType?: true
    createdAt?: true
  }

  export type IncidentEventMaxAggregateInputType = {
    id?: true
    incidentId?: true
    actorId?: true
    eventType?: true
    createdAt?: true
  }

  export type IncidentEventCountAggregateInputType = {
    id?: true
    incidentId?: true
    actorId?: true
    eventType?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type IncidentEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentEvent to aggregate.
     */
    where?: IncidentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentEvents to fetch.
     */
    orderBy?: IncidentEventOrderByWithRelationInput | IncidentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncidentEvents
    **/
    _count?: true | IncidentEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentEventMaxAggregateInputType
  }

  export type GetIncidentEventAggregateType<T extends IncidentEventAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidentEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidentEvent[P]>
      : GetScalarType<T[P], AggregateIncidentEvent[P]>
  }




  export type IncidentEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentEventWhereInput
    orderBy?: IncidentEventOrderByWithAggregationInput | IncidentEventOrderByWithAggregationInput[]
    by: IncidentEventScalarFieldEnum[] | IncidentEventScalarFieldEnum
    having?: IncidentEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentEventCountAggregateInputType | true
    _min?: IncidentEventMinAggregateInputType
    _max?: IncidentEventMaxAggregateInputType
  }

  export type IncidentEventGroupByOutputType = {
    id: string
    incidentId: string
    actorId: string | null
    eventType: $Enums.EventType
    metadata: JsonValue
    createdAt: Date
    _count: IncidentEventCountAggregateOutputType | null
    _min: IncidentEventMinAggregateOutputType | null
    _max: IncidentEventMaxAggregateOutputType | null
  }

  type GetIncidentEventGroupByPayload<T extends IncidentEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentEventGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentEventGroupByOutputType[P]>
        }
      >
    >


  export type IncidentEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    actorId?: boolean
    eventType?: boolean
    metadata?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    actor?: boolean | IncidentEvent$actorArgs<ExtArgs>
  }, ExtArgs["result"]["incidentEvent"]>

  export type IncidentEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    actorId?: boolean
    eventType?: boolean
    metadata?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    actor?: boolean | IncidentEvent$actorArgs<ExtArgs>
  }, ExtArgs["result"]["incidentEvent"]>

  export type IncidentEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    actorId?: boolean
    eventType?: boolean
    metadata?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    actor?: boolean | IncidentEvent$actorArgs<ExtArgs>
  }, ExtArgs["result"]["incidentEvent"]>

  export type IncidentEventSelectScalar = {
    id?: boolean
    incidentId?: boolean
    actorId?: boolean
    eventType?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type IncidentEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "incidentId" | "actorId" | "eventType" | "metadata" | "createdAt", ExtArgs["result"]["incidentEvent"]>
  export type IncidentEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    actor?: boolean | IncidentEvent$actorArgs<ExtArgs>
  }
  export type IncidentEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    actor?: boolean | IncidentEvent$actorArgs<ExtArgs>
  }
  export type IncidentEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    actor?: boolean | IncidentEvent$actorArgs<ExtArgs>
  }

  export type $IncidentEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncidentEvent"
    objects: {
      incident: Prisma.$IncidentPayload<ExtArgs>
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      incidentId: string
      actorId: string | null
      eventType: $Enums.EventType
      metadata: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["incidentEvent"]>
    composites: {}
  }

  type IncidentEventGetPayload<S extends boolean | null | undefined | IncidentEventDefaultArgs> = $Result.GetResult<Prisma.$IncidentEventPayload, S>

  type IncidentEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentEventCountAggregateInputType | true
    }

  export interface IncidentEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncidentEvent'], meta: { name: 'IncidentEvent' } }
    /**
     * Find zero or one IncidentEvent that matches the filter.
     * @param {IncidentEventFindUniqueArgs} args - Arguments to find a IncidentEvent
     * @example
     * // Get one IncidentEvent
     * const incidentEvent = await prisma.incidentEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentEventFindUniqueArgs>(args: SelectSubset<T, IncidentEventFindUniqueArgs<ExtArgs>>): Prisma__IncidentEventClient<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncidentEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentEventFindUniqueOrThrowArgs} args - Arguments to find a IncidentEvent
     * @example
     * // Get one IncidentEvent
     * const incidentEvent = await prisma.incidentEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentEventFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentEventClient<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEventFindFirstArgs} args - Arguments to find a IncidentEvent
     * @example
     * // Get one IncidentEvent
     * const incidentEvent = await prisma.incidentEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentEventFindFirstArgs>(args?: SelectSubset<T, IncidentEventFindFirstArgs<ExtArgs>>): Prisma__IncidentEventClient<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEventFindFirstOrThrowArgs} args - Arguments to find a IncidentEvent
     * @example
     * // Get one IncidentEvent
     * const incidentEvent = await prisma.incidentEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentEventFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentEventClient<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncidentEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncidentEvents
     * const incidentEvents = await prisma.incidentEvent.findMany()
     * 
     * // Get first 10 IncidentEvents
     * const incidentEvents = await prisma.incidentEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentEventWithIdOnly = await prisma.incidentEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentEventFindManyArgs>(args?: SelectSubset<T, IncidentEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncidentEvent.
     * @param {IncidentEventCreateArgs} args - Arguments to create a IncidentEvent.
     * @example
     * // Create one IncidentEvent
     * const IncidentEvent = await prisma.incidentEvent.create({
     *   data: {
     *     // ... data to create a IncidentEvent
     *   }
     * })
     * 
     */
    create<T extends IncidentEventCreateArgs>(args: SelectSubset<T, IncidentEventCreateArgs<ExtArgs>>): Prisma__IncidentEventClient<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncidentEvents.
     * @param {IncidentEventCreateManyArgs} args - Arguments to create many IncidentEvents.
     * @example
     * // Create many IncidentEvents
     * const incidentEvent = await prisma.incidentEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentEventCreateManyArgs>(args?: SelectSubset<T, IncidentEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IncidentEvents and returns the data saved in the database.
     * @param {IncidentEventCreateManyAndReturnArgs} args - Arguments to create many IncidentEvents.
     * @example
     * // Create many IncidentEvents
     * const incidentEvent = await prisma.incidentEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IncidentEvents and only return the `id`
     * const incidentEventWithIdOnly = await prisma.incidentEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentEventCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IncidentEvent.
     * @param {IncidentEventDeleteArgs} args - Arguments to delete one IncidentEvent.
     * @example
     * // Delete one IncidentEvent
     * const IncidentEvent = await prisma.incidentEvent.delete({
     *   where: {
     *     // ... filter to delete one IncidentEvent
     *   }
     * })
     * 
     */
    delete<T extends IncidentEventDeleteArgs>(args: SelectSubset<T, IncidentEventDeleteArgs<ExtArgs>>): Prisma__IncidentEventClient<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncidentEvent.
     * @param {IncidentEventUpdateArgs} args - Arguments to update one IncidentEvent.
     * @example
     * // Update one IncidentEvent
     * const incidentEvent = await prisma.incidentEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentEventUpdateArgs>(args: SelectSubset<T, IncidentEventUpdateArgs<ExtArgs>>): Prisma__IncidentEventClient<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncidentEvents.
     * @param {IncidentEventDeleteManyArgs} args - Arguments to filter IncidentEvents to delete.
     * @example
     * // Delete a few IncidentEvents
     * const { count } = await prisma.incidentEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentEventDeleteManyArgs>(args?: SelectSubset<T, IncidentEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncidentEvents
     * const incidentEvent = await prisma.incidentEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentEventUpdateManyArgs>(args: SelectSubset<T, IncidentEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentEvents and returns the data updated in the database.
     * @param {IncidentEventUpdateManyAndReturnArgs} args - Arguments to update many IncidentEvents.
     * @example
     * // Update many IncidentEvents
     * const incidentEvent = await prisma.incidentEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IncidentEvents and only return the `id`
     * const incidentEventWithIdOnly = await prisma.incidentEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentEventUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IncidentEvent.
     * @param {IncidentEventUpsertArgs} args - Arguments to update or create a IncidentEvent.
     * @example
     * // Update or create a IncidentEvent
     * const incidentEvent = await prisma.incidentEvent.upsert({
     *   create: {
     *     // ... data to create a IncidentEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncidentEvent we want to update
     *   }
     * })
     */
    upsert<T extends IncidentEventUpsertArgs>(args: SelectSubset<T, IncidentEventUpsertArgs<ExtArgs>>): Prisma__IncidentEventClient<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IncidentEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEventCountArgs} args - Arguments to filter IncidentEvents to count.
     * @example
     * // Count the number of IncidentEvents
     * const count = await prisma.incidentEvent.count({
     *   where: {
     *     // ... the filter for the IncidentEvents we want to count
     *   }
     * })
    **/
    count<T extends IncidentEventCountArgs>(
      args?: Subset<T, IncidentEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncidentEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentEventAggregateArgs>(args: Subset<T, IncidentEventAggregateArgs>): Prisma.PrismaPromise<GetIncidentEventAggregateType<T>>

    /**
     * Group by IncidentEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentEventGroupByArgs['orderBy'] }
        : { orderBy?: IncidentEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncidentEvent model
   */
  readonly fields: IncidentEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncidentEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incident<T extends IncidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncidentDefaultArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actor<T extends IncidentEvent$actorArgs<ExtArgs> = {}>(args?: Subset<T, IncidentEvent$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IncidentEvent model
   */
  interface IncidentEventFieldRefs {
    readonly id: FieldRef<"IncidentEvent", 'String'>
    readonly incidentId: FieldRef<"IncidentEvent", 'String'>
    readonly actorId: FieldRef<"IncidentEvent", 'String'>
    readonly eventType: FieldRef<"IncidentEvent", 'EventType'>
    readonly metadata: FieldRef<"IncidentEvent", 'Json'>
    readonly createdAt: FieldRef<"IncidentEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IncidentEvent findUnique
   */
  export type IncidentEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * Filter, which IncidentEvent to fetch.
     */
    where: IncidentEventWhereUniqueInput
  }

  /**
   * IncidentEvent findUniqueOrThrow
   */
  export type IncidentEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * Filter, which IncidentEvent to fetch.
     */
    where: IncidentEventWhereUniqueInput
  }

  /**
   * IncidentEvent findFirst
   */
  export type IncidentEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * Filter, which IncidentEvent to fetch.
     */
    where?: IncidentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentEvents to fetch.
     */
    orderBy?: IncidentEventOrderByWithRelationInput | IncidentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentEvents.
     */
    cursor?: IncidentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentEvents.
     */
    distinct?: IncidentEventScalarFieldEnum | IncidentEventScalarFieldEnum[]
  }

  /**
   * IncidentEvent findFirstOrThrow
   */
  export type IncidentEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * Filter, which IncidentEvent to fetch.
     */
    where?: IncidentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentEvents to fetch.
     */
    orderBy?: IncidentEventOrderByWithRelationInput | IncidentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentEvents.
     */
    cursor?: IncidentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentEvents.
     */
    distinct?: IncidentEventScalarFieldEnum | IncidentEventScalarFieldEnum[]
  }

  /**
   * IncidentEvent findMany
   */
  export type IncidentEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * Filter, which IncidentEvents to fetch.
     */
    where?: IncidentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentEvents to fetch.
     */
    orderBy?: IncidentEventOrderByWithRelationInput | IncidentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncidentEvents.
     */
    cursor?: IncidentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentEvents.
     */
    skip?: number
    distinct?: IncidentEventScalarFieldEnum | IncidentEventScalarFieldEnum[]
  }

  /**
   * IncidentEvent create
   */
  export type IncidentEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * The data needed to create a IncidentEvent.
     */
    data: XOR<IncidentEventCreateInput, IncidentEventUncheckedCreateInput>
  }

  /**
   * IncidentEvent createMany
   */
  export type IncidentEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncidentEvents.
     */
    data: IncidentEventCreateManyInput | IncidentEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IncidentEvent createManyAndReturn
   */
  export type IncidentEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * The data used to create many IncidentEvents.
     */
    data: IncidentEventCreateManyInput | IncidentEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentEvent update
   */
  export type IncidentEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * The data needed to update a IncidentEvent.
     */
    data: XOR<IncidentEventUpdateInput, IncidentEventUncheckedUpdateInput>
    /**
     * Choose, which IncidentEvent to update.
     */
    where: IncidentEventWhereUniqueInput
  }

  /**
   * IncidentEvent updateMany
   */
  export type IncidentEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncidentEvents.
     */
    data: XOR<IncidentEventUpdateManyMutationInput, IncidentEventUncheckedUpdateManyInput>
    /**
     * Filter which IncidentEvents to update
     */
    where?: IncidentEventWhereInput
    /**
     * Limit how many IncidentEvents to update.
     */
    limit?: number
  }

  /**
   * IncidentEvent updateManyAndReturn
   */
  export type IncidentEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * The data used to update IncidentEvents.
     */
    data: XOR<IncidentEventUpdateManyMutationInput, IncidentEventUncheckedUpdateManyInput>
    /**
     * Filter which IncidentEvents to update
     */
    where?: IncidentEventWhereInput
    /**
     * Limit how many IncidentEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentEvent upsert
   */
  export type IncidentEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * The filter to search for the IncidentEvent to update in case it exists.
     */
    where: IncidentEventWhereUniqueInput
    /**
     * In case the IncidentEvent found by the `where` argument doesn't exist, create a new IncidentEvent with this data.
     */
    create: XOR<IncidentEventCreateInput, IncidentEventUncheckedCreateInput>
    /**
     * In case the IncidentEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentEventUpdateInput, IncidentEventUncheckedUpdateInput>
  }

  /**
   * IncidentEvent delete
   */
  export type IncidentEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * Filter which IncidentEvent to delete.
     */
    where: IncidentEventWhereUniqueInput
  }

  /**
   * IncidentEvent deleteMany
   */
  export type IncidentEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentEvents to delete
     */
    where?: IncidentEventWhereInput
    /**
     * Limit how many IncidentEvents to delete.
     */
    limit?: number
  }

  /**
   * IncidentEvent.actor
   */
  export type IncidentEvent$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * IncidentEvent without action
   */
  export type IncidentEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    incidentId: 'incidentId',
    authorId: 'authorId',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const IncidentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    severity: 'severity',
    status: 'status',
    acknowledgedAt: 'acknowledgedAt',
    resolvedAt: 'resolvedAt',
    closedAt: 'closedAt',
    currentSlaStartAt: 'currentSlaStartAt',
    slaTargetMinutes: 'slaTargetMinutes',
    ownerId: 'ownerId',
    createdById: 'createdById',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum]


  export const IncidentEventScalarFieldEnum: {
    id: 'id',
    incidentId: 'incidentId',
    actorId: 'actorId',
    eventType: 'eventType',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type IncidentEventScalarFieldEnum = (typeof IncidentEventScalarFieldEnum)[keyof typeof IncidentEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Severity'
   */
  export type EnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity'>
    


  /**
   * Reference to a field of type 'Severity[]'
   */
  export type ListEnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    ownedIncidents?: IncidentListRelationFilter
    createdIncidents?: IncidentListRelationFilter
    actedIncidentEvents?: IncidentEventListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    ownedIncidents?: IncidentOrderByRelationAggregateInput
    createdIncidents?: IncidentOrderByRelationAggregateInput
    actedIncidentEvents?: IncidentEventOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    ownedIncidents?: IncidentListRelationFilter
    createdIncidents?: IncidentListRelationFilter
    actedIncidentEvents?: IncidentEventListRelationFilter
    comments?: CommentListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    incidentId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    message?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    authorId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    incident?: IncidentOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    incidentId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    message?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    authorId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    incidentId?: StringWithAggregatesFilter<"Comment"> | string
    authorId?: StringWithAggregatesFilter<"Comment"> | string
    message?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type IncidentWhereInput = {
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    id?: StringFilter<"Incident"> | string
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    severity?: EnumSeverityNullableFilter<"Incident"> | $Enums.Severity | null
    status?: EnumStatusFilter<"Incident"> | $Enums.Status
    acknowledgedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    closedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    currentSlaStartAt?: DateTimeFilter<"Incident"> | Date | string
    slaTargetMinutes?: IntNullableFilter<"Incident"> | number | null
    ownerId?: StringFilter<"Incident"> | string
    createdById?: StringFilter<"Incident"> | string
    version?: IntFilter<"Incident"> | number
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    events?: IncidentEventListRelationFilter
  }

  export type IncidentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrderInput | SortOrder
    status?: SortOrder
    acknowledgedAt?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    closedAt?: SortOrderInput | SortOrder
    currentSlaStartAt?: SortOrder
    slaTargetMinutes?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdById?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    events?: IncidentEventOrderByRelationAggregateInput
  }

  export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    severity?: EnumSeverityNullableFilter<"Incident"> | $Enums.Severity | null
    status?: EnumStatusFilter<"Incident"> | $Enums.Status
    acknowledgedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    closedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    currentSlaStartAt?: DateTimeFilter<"Incident"> | Date | string
    slaTargetMinutes?: IntNullableFilter<"Incident"> | number | null
    ownerId?: StringFilter<"Incident"> | string
    createdById?: StringFilter<"Incident"> | string
    version?: IntFilter<"Incident"> | number
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    events?: IncidentEventListRelationFilter
  }, "id">

  export type IncidentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrderInput | SortOrder
    status?: SortOrder
    acknowledgedAt?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    closedAt?: SortOrderInput | SortOrder
    currentSlaStartAt?: SortOrder
    slaTargetMinutes?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdById?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IncidentCountOrderByAggregateInput
    _avg?: IncidentAvgOrderByAggregateInput
    _max?: IncidentMaxOrderByAggregateInput
    _min?: IncidentMinOrderByAggregateInput
    _sum?: IncidentSumOrderByAggregateInput
  }

  export type IncidentScalarWhereWithAggregatesInput = {
    AND?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    OR?: IncidentScalarWhereWithAggregatesInput[]
    NOT?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Incident"> | string
    title?: StringWithAggregatesFilter<"Incident"> | string
    description?: StringWithAggregatesFilter<"Incident"> | string
    severity?: EnumSeverityNullableWithAggregatesFilter<"Incident"> | $Enums.Severity | null
    status?: EnumStatusWithAggregatesFilter<"Incident"> | $Enums.Status
    acknowledgedAt?: DateTimeNullableWithAggregatesFilter<"Incident"> | Date | string | null
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Incident"> | Date | string | null
    closedAt?: DateTimeNullableWithAggregatesFilter<"Incident"> | Date | string | null
    currentSlaStartAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    slaTargetMinutes?: IntNullableWithAggregatesFilter<"Incident"> | number | null
    ownerId?: StringWithAggregatesFilter<"Incident"> | string
    createdById?: StringWithAggregatesFilter<"Incident"> | string
    version?: IntWithAggregatesFilter<"Incident"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
  }

  export type IncidentEventWhereInput = {
    AND?: IncidentEventWhereInput | IncidentEventWhereInput[]
    OR?: IncidentEventWhereInput[]
    NOT?: IncidentEventWhereInput | IncidentEventWhereInput[]
    id?: StringFilter<"IncidentEvent"> | string
    incidentId?: StringFilter<"IncidentEvent"> | string
    actorId?: StringNullableFilter<"IncidentEvent"> | string | null
    eventType?: EnumEventTypeFilter<"IncidentEvent"> | $Enums.EventType
    metadata?: JsonFilter<"IncidentEvent">
    createdAt?: DateTimeFilter<"IncidentEvent"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type IncidentEventOrderByWithRelationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    actorId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    incident?: IncidentOrderByWithRelationInput
    actor?: UserOrderByWithRelationInput
  }

  export type IncidentEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentEventWhereInput | IncidentEventWhereInput[]
    OR?: IncidentEventWhereInput[]
    NOT?: IncidentEventWhereInput | IncidentEventWhereInput[]
    incidentId?: StringFilter<"IncidentEvent"> | string
    actorId?: StringNullableFilter<"IncidentEvent"> | string | null
    eventType?: EnumEventTypeFilter<"IncidentEvent"> | $Enums.EventType
    metadata?: JsonFilter<"IncidentEvent">
    createdAt?: DateTimeFilter<"IncidentEvent"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type IncidentEventOrderByWithAggregationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    actorId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    _count?: IncidentEventCountOrderByAggregateInput
    _max?: IncidentEventMaxOrderByAggregateInput
    _min?: IncidentEventMinOrderByAggregateInput
  }

  export type IncidentEventScalarWhereWithAggregatesInput = {
    AND?: IncidentEventScalarWhereWithAggregatesInput | IncidentEventScalarWhereWithAggregatesInput[]
    OR?: IncidentEventScalarWhereWithAggregatesInput[]
    NOT?: IncidentEventScalarWhereWithAggregatesInput | IncidentEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IncidentEvent"> | string
    incidentId?: StringWithAggregatesFilter<"IncidentEvent"> | string
    actorId?: StringNullableWithAggregatesFilter<"IncidentEvent"> | string | null
    eventType?: EnumEventTypeWithAggregatesFilter<"IncidentEvent"> | $Enums.EventType
    metadata?: JsonWithAggregatesFilter<"IncidentEvent">
    createdAt?: DateTimeWithAggregatesFilter<"IncidentEvent"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    role?: $Enums.Role
    ownedIncidents?: IncidentCreateNestedManyWithoutOwnerInput
    createdIncidents?: IncidentCreateNestedManyWithoutCreatedByInput
    actedIncidentEvents?: IncidentEventCreateNestedManyWithoutActorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    role?: $Enums.Role
    ownedIncidents?: IncidentUncheckedCreateNestedManyWithoutOwnerInput
    createdIncidents?: IncidentUncheckedCreateNestedManyWithoutCreatedByInput
    actedIncidentEvents?: IncidentEventUncheckedCreateNestedManyWithoutActorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ownedIncidents?: IncidentUpdateManyWithoutOwnerNestedInput
    createdIncidents?: IncidentUpdateManyWithoutCreatedByNestedInput
    actedIncidentEvents?: IncidentEventUpdateManyWithoutActorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ownedIncidents?: IncidentUncheckedUpdateManyWithoutOwnerNestedInput
    createdIncidents?: IncidentUncheckedUpdateManyWithoutCreatedByNestedInput
    actedIncidentEvents?: IncidentEventUncheckedUpdateManyWithoutActorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CommentCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    incident: IncidentCreateNestedOneWithoutCommentsInput
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    incidentId: string
    authorId: string
    message: string
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incident?: IncidentUpdateOneRequiredWithoutCommentsNestedInput
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    incidentId: string
    authorId: string
    message: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateInput = {
    id?: string
    title: string
    description: string
    severity?: $Enums.Severity | null
    status?: $Enums.Status
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    closedAt?: Date | string | null
    currentSlaStartAt: Date | string
    slaTargetMinutes?: number | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedIncidentsInput
    createdBy: UserCreateNestedOneWithoutCreatedIncidentsInput
    comments?: CommentCreateNestedManyWithoutIncidentInput
    events?: IncidentEventCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    severity?: $Enums.Severity | null
    status?: $Enums.Status
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    closedAt?: Date | string | null
    currentSlaStartAt: Date | string
    slaTargetMinutes?: number | null
    ownerId: string
    createdById: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutIncidentInput
    events?: IncidentEventUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSlaStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slaTargetMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedIncidentsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedIncidentsNestedInput
    comments?: CommentUpdateManyWithoutIncidentNestedInput
    events?: IncidentEventUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSlaStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slaTargetMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutIncidentNestedInput
    events?: IncidentEventUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentCreateManyInput = {
    id?: string
    title: string
    description: string
    severity?: $Enums.Severity | null
    status?: $Enums.Status
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    closedAt?: Date | string | null
    currentSlaStartAt: Date | string
    slaTargetMinutes?: number | null
    ownerId: string
    createdById: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSlaStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slaTargetMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSlaStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slaTargetMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEventCreateInput = {
    id?: string
    eventType: $Enums.EventType
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    incident: IncidentCreateNestedOneWithoutEventsInput
    actor?: UserCreateNestedOneWithoutActedIncidentEventsInput
  }

  export type IncidentEventUncheckedCreateInput = {
    id?: string
    incidentId: string
    actorId?: string | null
    eventType: $Enums.EventType
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IncidentEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incident?: IncidentUpdateOneRequiredWithoutEventsNestedInput
    actor?: UserUpdateOneWithoutActedIncidentEventsNestedInput
  }

  export type IncidentEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEventCreateManyInput = {
    id?: string
    incidentId: string
    actorId?: string | null
    eventType: $Enums.EventType
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IncidentEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IncidentListRelationFilter = {
    every?: IncidentWhereInput
    some?: IncidentWhereInput
    none?: IncidentWhereInput
  }

  export type IncidentEventListRelationFilter = {
    every?: IncidentEventWhereInput
    some?: IncidentEventWhereInput
    none?: IncidentEventWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type IncidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IncidentScalarRelationFilter = {
    is?: IncidentWhereInput
    isNot?: IncidentWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    authorId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    authorId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    authorId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSeverityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSeverityNullableFilter<$PrismaModel> | $Enums.Severity | null
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IncidentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    acknowledgedAt?: SortOrder
    resolvedAt?: SortOrder
    closedAt?: SortOrder
    currentSlaStartAt?: SortOrder
    slaTargetMinutes?: SortOrder
    ownerId?: SortOrder
    createdById?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentAvgOrderByAggregateInput = {
    slaTargetMinutes?: SortOrder
    version?: SortOrder
  }

  export type IncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    acknowledgedAt?: SortOrder
    resolvedAt?: SortOrder
    closedAt?: SortOrder
    currentSlaStartAt?: SortOrder
    slaTargetMinutes?: SortOrder
    ownerId?: SortOrder
    createdById?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    acknowledgedAt?: SortOrder
    resolvedAt?: SortOrder
    closedAt?: SortOrder
    currentSlaStartAt?: SortOrder
    slaTargetMinutes?: SortOrder
    ownerId?: SortOrder
    createdById?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentSumOrderByAggregateInput = {
    slaTargetMinutes?: SortOrder
    version?: SortOrder
  }

  export type EnumSeverityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSeverityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Severity | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSeverityNullableFilter<$PrismaModel>
    _max?: NestedEnumSeverityNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type IncidentEventCountOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    actorId?: SortOrder
    eventType?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentEventMaxOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    actorId?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentEventMinOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    actorId?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IncidentCreateNestedManyWithoutOwnerInput = {
    create?: XOR<IncidentCreateWithoutOwnerInput, IncidentUncheckedCreateWithoutOwnerInput> | IncidentCreateWithoutOwnerInput[] | IncidentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutOwnerInput | IncidentCreateOrConnectWithoutOwnerInput[]
    createMany?: IncidentCreateManyOwnerInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<IncidentCreateWithoutCreatedByInput, IncidentUncheckedCreateWithoutCreatedByInput> | IncidentCreateWithoutCreatedByInput[] | IncidentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutCreatedByInput | IncidentCreateOrConnectWithoutCreatedByInput[]
    createMany?: IncidentCreateManyCreatedByInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type IncidentEventCreateNestedManyWithoutActorInput = {
    create?: XOR<IncidentEventCreateWithoutActorInput, IncidentEventUncheckedCreateWithoutActorInput> | IncidentEventCreateWithoutActorInput[] | IncidentEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: IncidentEventCreateOrConnectWithoutActorInput | IncidentEventCreateOrConnectWithoutActorInput[]
    createMany?: IncidentEventCreateManyActorInputEnvelope
    connect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<IncidentCreateWithoutOwnerInput, IncidentUncheckedCreateWithoutOwnerInput> | IncidentCreateWithoutOwnerInput[] | IncidentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutOwnerInput | IncidentCreateOrConnectWithoutOwnerInput[]
    createMany?: IncidentCreateManyOwnerInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<IncidentCreateWithoutCreatedByInput, IncidentUncheckedCreateWithoutCreatedByInput> | IncidentCreateWithoutCreatedByInput[] | IncidentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutCreatedByInput | IncidentCreateOrConnectWithoutCreatedByInput[]
    createMany?: IncidentCreateManyCreatedByInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type IncidentEventUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<IncidentEventCreateWithoutActorInput, IncidentEventUncheckedCreateWithoutActorInput> | IncidentEventCreateWithoutActorInput[] | IncidentEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: IncidentEventCreateOrConnectWithoutActorInput | IncidentEventCreateOrConnectWithoutActorInput[]
    createMany?: IncidentEventCreateManyActorInputEnvelope
    connect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IncidentUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<IncidentCreateWithoutOwnerInput, IncidentUncheckedCreateWithoutOwnerInput> | IncidentCreateWithoutOwnerInput[] | IncidentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutOwnerInput | IncidentCreateOrConnectWithoutOwnerInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutOwnerInput | IncidentUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: IncidentCreateManyOwnerInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutOwnerInput | IncidentUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutOwnerInput | IncidentUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<IncidentCreateWithoutCreatedByInput, IncidentUncheckedCreateWithoutCreatedByInput> | IncidentCreateWithoutCreatedByInput[] | IncidentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutCreatedByInput | IncidentCreateOrConnectWithoutCreatedByInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutCreatedByInput | IncidentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: IncidentCreateManyCreatedByInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutCreatedByInput | IncidentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutCreatedByInput | IncidentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type IncidentEventUpdateManyWithoutActorNestedInput = {
    create?: XOR<IncidentEventCreateWithoutActorInput, IncidentEventUncheckedCreateWithoutActorInput> | IncidentEventCreateWithoutActorInput[] | IncidentEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: IncidentEventCreateOrConnectWithoutActorInput | IncidentEventCreateOrConnectWithoutActorInput[]
    upsert?: IncidentEventUpsertWithWhereUniqueWithoutActorInput | IncidentEventUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: IncidentEventCreateManyActorInputEnvelope
    set?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    disconnect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    delete?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    connect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    update?: IncidentEventUpdateWithWhereUniqueWithoutActorInput | IncidentEventUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: IncidentEventUpdateManyWithWhereWithoutActorInput | IncidentEventUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: IncidentEventScalarWhereInput | IncidentEventScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<IncidentCreateWithoutOwnerInput, IncidentUncheckedCreateWithoutOwnerInput> | IncidentCreateWithoutOwnerInput[] | IncidentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutOwnerInput | IncidentCreateOrConnectWithoutOwnerInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutOwnerInput | IncidentUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: IncidentCreateManyOwnerInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutOwnerInput | IncidentUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutOwnerInput | IncidentUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<IncidentCreateWithoutCreatedByInput, IncidentUncheckedCreateWithoutCreatedByInput> | IncidentCreateWithoutCreatedByInput[] | IncidentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutCreatedByInput | IncidentCreateOrConnectWithoutCreatedByInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutCreatedByInput | IncidentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: IncidentCreateManyCreatedByInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutCreatedByInput | IncidentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutCreatedByInput | IncidentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type IncidentEventUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<IncidentEventCreateWithoutActorInput, IncidentEventUncheckedCreateWithoutActorInput> | IncidentEventCreateWithoutActorInput[] | IncidentEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: IncidentEventCreateOrConnectWithoutActorInput | IncidentEventCreateOrConnectWithoutActorInput[]
    upsert?: IncidentEventUpsertWithWhereUniqueWithoutActorInput | IncidentEventUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: IncidentEventCreateManyActorInputEnvelope
    set?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    disconnect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    delete?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    connect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    update?: IncidentEventUpdateWithWhereUniqueWithoutActorInput | IncidentEventUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: IncidentEventUpdateManyWithWhereWithoutActorInput | IncidentEventUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: IncidentEventScalarWhereInput | IncidentEventScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type IncidentCreateNestedOneWithoutCommentsInput = {
    create?: XOR<IncidentCreateWithoutCommentsInput, IncidentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutCommentsInput
    connect?: IncidentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IncidentUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<IncidentCreateWithoutCommentsInput, IncidentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutCommentsInput
    upsert?: IncidentUpsertWithoutCommentsInput
    connect?: IncidentWhereUniqueInput
    update?: XOR<XOR<IncidentUpdateToOneWithWhereWithoutCommentsInput, IncidentUpdateWithoutCommentsInput>, IncidentUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutOwnedIncidentsInput = {
    create?: XOR<UserCreateWithoutOwnedIncidentsInput, UserUncheckedCreateWithoutOwnedIncidentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedIncidentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedIncidentsInput = {
    create?: XOR<UserCreateWithoutCreatedIncidentsInput, UserUncheckedCreateWithoutCreatedIncidentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedIncidentsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutIncidentInput = {
    create?: XOR<CommentCreateWithoutIncidentInput, CommentUncheckedCreateWithoutIncidentInput> | CommentCreateWithoutIncidentInput[] | CommentUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutIncidentInput | CommentCreateOrConnectWithoutIncidentInput[]
    createMany?: CommentCreateManyIncidentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type IncidentEventCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentEventCreateWithoutIncidentInput, IncidentEventUncheckedCreateWithoutIncidentInput> | IncidentEventCreateWithoutIncidentInput[] | IncidentEventUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentEventCreateOrConnectWithoutIncidentInput | IncidentEventCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentEventCreateManyIncidentInputEnvelope
    connect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutIncidentInput = {
    create?: XOR<CommentCreateWithoutIncidentInput, CommentUncheckedCreateWithoutIncidentInput> | CommentCreateWithoutIncidentInput[] | CommentUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutIncidentInput | CommentCreateOrConnectWithoutIncidentInput[]
    createMany?: CommentCreateManyIncidentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type IncidentEventUncheckedCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentEventCreateWithoutIncidentInput, IncidentEventUncheckedCreateWithoutIncidentInput> | IncidentEventCreateWithoutIncidentInput[] | IncidentEventUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentEventCreateOrConnectWithoutIncidentInput | IncidentEventCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentEventCreateManyIncidentInputEnvelope
    connect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
  }

  export type NullableEnumSeverityFieldUpdateOperationsInput = {
    set?: $Enums.Severity | null
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutOwnedIncidentsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedIncidentsInput, UserUncheckedCreateWithoutOwnedIncidentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedIncidentsInput
    upsert?: UserUpsertWithoutOwnedIncidentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedIncidentsInput, UserUpdateWithoutOwnedIncidentsInput>, UserUncheckedUpdateWithoutOwnedIncidentsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedIncidentsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedIncidentsInput, UserUncheckedCreateWithoutCreatedIncidentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedIncidentsInput
    upsert?: UserUpsertWithoutCreatedIncidentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedIncidentsInput, UserUpdateWithoutCreatedIncidentsInput>, UserUncheckedUpdateWithoutCreatedIncidentsInput>
  }

  export type CommentUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<CommentCreateWithoutIncidentInput, CommentUncheckedCreateWithoutIncidentInput> | CommentCreateWithoutIncidentInput[] | CommentUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutIncidentInput | CommentCreateOrConnectWithoutIncidentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutIncidentInput | CommentUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: CommentCreateManyIncidentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutIncidentInput | CommentUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutIncidentInput | CommentUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type IncidentEventUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentEventCreateWithoutIncidentInput, IncidentEventUncheckedCreateWithoutIncidentInput> | IncidentEventCreateWithoutIncidentInput[] | IncidentEventUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentEventCreateOrConnectWithoutIncidentInput | IncidentEventCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentEventUpsertWithWhereUniqueWithoutIncidentInput | IncidentEventUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentEventCreateManyIncidentInputEnvelope
    set?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    disconnect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    delete?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    connect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    update?: IncidentEventUpdateWithWhereUniqueWithoutIncidentInput | IncidentEventUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentEventUpdateManyWithWhereWithoutIncidentInput | IncidentEventUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentEventScalarWhereInput | IncidentEventScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<CommentCreateWithoutIncidentInput, CommentUncheckedCreateWithoutIncidentInput> | CommentCreateWithoutIncidentInput[] | CommentUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutIncidentInput | CommentCreateOrConnectWithoutIncidentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutIncidentInput | CommentUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: CommentCreateManyIncidentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutIncidentInput | CommentUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutIncidentInput | CommentUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type IncidentEventUncheckedUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentEventCreateWithoutIncidentInput, IncidentEventUncheckedCreateWithoutIncidentInput> | IncidentEventCreateWithoutIncidentInput[] | IncidentEventUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentEventCreateOrConnectWithoutIncidentInput | IncidentEventCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentEventUpsertWithWhereUniqueWithoutIncidentInput | IncidentEventUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentEventCreateManyIncidentInputEnvelope
    set?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    disconnect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    delete?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    connect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    update?: IncidentEventUpdateWithWhereUniqueWithoutIncidentInput | IncidentEventUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentEventUpdateManyWithWhereWithoutIncidentInput | IncidentEventUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentEventScalarWhereInput | IncidentEventScalarWhereInput[]
  }

  export type IncidentCreateNestedOneWithoutEventsInput = {
    create?: XOR<IncidentCreateWithoutEventsInput, IncidentUncheckedCreateWithoutEventsInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutEventsInput
    connect?: IncidentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActedIncidentEventsInput = {
    create?: XOR<UserCreateWithoutActedIncidentEventsInput, UserUncheckedCreateWithoutActedIncidentEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActedIncidentEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type IncidentUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<IncidentCreateWithoutEventsInput, IncidentUncheckedCreateWithoutEventsInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutEventsInput
    upsert?: IncidentUpsertWithoutEventsInput
    connect?: IncidentWhereUniqueInput
    update?: XOR<XOR<IncidentUpdateToOneWithWhereWithoutEventsInput, IncidentUpdateWithoutEventsInput>, IncidentUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateOneWithoutActedIncidentEventsNestedInput = {
    create?: XOR<UserCreateWithoutActedIncidentEventsInput, UserUncheckedCreateWithoutActedIncidentEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActedIncidentEventsInput
    upsert?: UserUpsertWithoutActedIncidentEventsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActedIncidentEventsInput, UserUpdateWithoutActedIncidentEventsInput>, UserUncheckedUpdateWithoutActedIncidentEventsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSeverityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSeverityNullableFilter<$PrismaModel> | $Enums.Severity | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSeverityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSeverityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Severity | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSeverityNullableFilter<$PrismaModel>
    _max?: NestedEnumSeverityNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IncidentCreateWithoutOwnerInput = {
    id?: string
    title: string
    description: string
    severity?: $Enums.Severity | null
    status?: $Enums.Status
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    closedAt?: Date | string | null
    currentSlaStartAt: Date | string
    slaTargetMinutes?: number | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedIncidentsInput
    comments?: CommentCreateNestedManyWithoutIncidentInput
    events?: IncidentEventCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description: string
    severity?: $Enums.Severity | null
    status?: $Enums.Status
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    closedAt?: Date | string | null
    currentSlaStartAt: Date | string
    slaTargetMinutes?: number | null
    createdById: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutIncidentInput
    events?: IncidentEventUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutOwnerInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutOwnerInput, IncidentUncheckedCreateWithoutOwnerInput>
  }

  export type IncidentCreateManyOwnerInputEnvelope = {
    data: IncidentCreateManyOwnerInput | IncidentCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type IncidentCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    severity?: $Enums.Severity | null
    status?: $Enums.Status
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    closedAt?: Date | string | null
    currentSlaStartAt: Date | string
    slaTargetMinutes?: number | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedIncidentsInput
    comments?: CommentCreateNestedManyWithoutIncidentInput
    events?: IncidentEventCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    severity?: $Enums.Severity | null
    status?: $Enums.Status
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    closedAt?: Date | string | null
    currentSlaStartAt: Date | string
    slaTargetMinutes?: number | null
    ownerId: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutIncidentInput
    events?: IncidentEventUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutCreatedByInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutCreatedByInput, IncidentUncheckedCreateWithoutCreatedByInput>
  }

  export type IncidentCreateManyCreatedByInputEnvelope = {
    data: IncidentCreateManyCreatedByInput | IncidentCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type IncidentEventCreateWithoutActorInput = {
    id?: string
    eventType: $Enums.EventType
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    incident: IncidentCreateNestedOneWithoutEventsInput
  }

  export type IncidentEventUncheckedCreateWithoutActorInput = {
    id?: string
    incidentId: string
    eventType: $Enums.EventType
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IncidentEventCreateOrConnectWithoutActorInput = {
    where: IncidentEventWhereUniqueInput
    create: XOR<IncidentEventCreateWithoutActorInput, IncidentEventUncheckedCreateWithoutActorInput>
  }

  export type IncidentEventCreateManyActorInputEnvelope = {
    data: IncidentEventCreateManyActorInput | IncidentEventCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: string
    message: string
    createdAt?: Date | string
    incident: IncidentCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    incidentId: string
    message: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type IncidentUpsertWithWhereUniqueWithoutOwnerInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutOwnerInput, IncidentUncheckedUpdateWithoutOwnerInput>
    create: XOR<IncidentCreateWithoutOwnerInput, IncidentUncheckedCreateWithoutOwnerInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutOwnerInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutOwnerInput, IncidentUncheckedUpdateWithoutOwnerInput>
  }

  export type IncidentUpdateManyWithWhereWithoutOwnerInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutOwnerInput>
  }

  export type IncidentScalarWhereInput = {
    AND?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    OR?: IncidentScalarWhereInput[]
    NOT?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    id?: StringFilter<"Incident"> | string
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    severity?: EnumSeverityNullableFilter<"Incident"> | $Enums.Severity | null
    status?: EnumStatusFilter<"Incident"> | $Enums.Status
    acknowledgedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    closedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    currentSlaStartAt?: DateTimeFilter<"Incident"> | Date | string
    slaTargetMinutes?: IntNullableFilter<"Incident"> | number | null
    ownerId?: StringFilter<"Incident"> | string
    createdById?: StringFilter<"Incident"> | string
    version?: IntFilter<"Incident"> | number
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
  }

  export type IncidentUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutCreatedByInput, IncidentUncheckedUpdateWithoutCreatedByInput>
    create: XOR<IncidentCreateWithoutCreatedByInput, IncidentUncheckedCreateWithoutCreatedByInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutCreatedByInput, IncidentUncheckedUpdateWithoutCreatedByInput>
  }

  export type IncidentUpdateManyWithWhereWithoutCreatedByInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type IncidentEventUpsertWithWhereUniqueWithoutActorInput = {
    where: IncidentEventWhereUniqueInput
    update: XOR<IncidentEventUpdateWithoutActorInput, IncidentEventUncheckedUpdateWithoutActorInput>
    create: XOR<IncidentEventCreateWithoutActorInput, IncidentEventUncheckedCreateWithoutActorInput>
  }

  export type IncidentEventUpdateWithWhereUniqueWithoutActorInput = {
    where: IncidentEventWhereUniqueInput
    data: XOR<IncidentEventUpdateWithoutActorInput, IncidentEventUncheckedUpdateWithoutActorInput>
  }

  export type IncidentEventUpdateManyWithWhereWithoutActorInput = {
    where: IncidentEventScalarWhereInput
    data: XOR<IncidentEventUpdateManyMutationInput, IncidentEventUncheckedUpdateManyWithoutActorInput>
  }

  export type IncidentEventScalarWhereInput = {
    AND?: IncidentEventScalarWhereInput | IncidentEventScalarWhereInput[]
    OR?: IncidentEventScalarWhereInput[]
    NOT?: IncidentEventScalarWhereInput | IncidentEventScalarWhereInput[]
    id?: StringFilter<"IncidentEvent"> | string
    incidentId?: StringFilter<"IncidentEvent"> | string
    actorId?: StringNullableFilter<"IncidentEvent"> | string | null
    eventType?: EnumEventTypeFilter<"IncidentEvent"> | $Enums.EventType
    metadata?: JsonFilter<"IncidentEvent">
    createdAt?: DateTimeFilter<"IncidentEvent"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    incidentId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    message?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type IncidentCreateWithoutCommentsInput = {
    id?: string
    title: string
    description: string
    severity?: $Enums.Severity | null
    status?: $Enums.Status
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    closedAt?: Date | string | null
    currentSlaStartAt: Date | string
    slaTargetMinutes?: number | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedIncidentsInput
    createdBy: UserCreateNestedOneWithoutCreatedIncidentsInput
    events?: IncidentEventCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    description: string
    severity?: $Enums.Severity | null
    status?: $Enums.Status
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    closedAt?: Date | string | null
    currentSlaStartAt: Date | string
    slaTargetMinutes?: number | null
    ownerId: string
    createdById: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: IncidentEventUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutCommentsInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutCommentsInput, IncidentUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    role?: $Enums.Role
    ownedIncidents?: IncidentCreateNestedManyWithoutOwnerInput
    createdIncidents?: IncidentCreateNestedManyWithoutCreatedByInput
    actedIncidentEvents?: IncidentEventCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    role?: $Enums.Role
    ownedIncidents?: IncidentUncheckedCreateNestedManyWithoutOwnerInput
    createdIncidents?: IncidentUncheckedCreateNestedManyWithoutCreatedByInput
    actedIncidentEvents?: IncidentEventUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type IncidentUpsertWithoutCommentsInput = {
    update: XOR<IncidentUpdateWithoutCommentsInput, IncidentUncheckedUpdateWithoutCommentsInput>
    create: XOR<IncidentCreateWithoutCommentsInput, IncidentUncheckedCreateWithoutCommentsInput>
    where?: IncidentWhereInput
  }

  export type IncidentUpdateToOneWithWhereWithoutCommentsInput = {
    where?: IncidentWhereInput
    data: XOR<IncidentUpdateWithoutCommentsInput, IncidentUncheckedUpdateWithoutCommentsInput>
  }

  export type IncidentUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSlaStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slaTargetMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedIncidentsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedIncidentsNestedInput
    events?: IncidentEventUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSlaStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slaTargetMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: IncidentEventUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ownedIncidents?: IncidentUpdateManyWithoutOwnerNestedInput
    createdIncidents?: IncidentUpdateManyWithoutCreatedByNestedInput
    actedIncidentEvents?: IncidentEventUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ownedIncidents?: IncidentUncheckedUpdateManyWithoutOwnerNestedInput
    createdIncidents?: IncidentUncheckedUpdateManyWithoutCreatedByNestedInput
    actedIncidentEvents?: IncidentEventUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateWithoutOwnedIncidentsInput = {
    id?: string
    role?: $Enums.Role
    createdIncidents?: IncidentCreateNestedManyWithoutCreatedByInput
    actedIncidentEvents?: IncidentEventCreateNestedManyWithoutActorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutOwnedIncidentsInput = {
    id?: string
    role?: $Enums.Role
    createdIncidents?: IncidentUncheckedCreateNestedManyWithoutCreatedByInput
    actedIncidentEvents?: IncidentEventUncheckedCreateNestedManyWithoutActorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutOwnedIncidentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedIncidentsInput, UserUncheckedCreateWithoutOwnedIncidentsInput>
  }

  export type UserCreateWithoutCreatedIncidentsInput = {
    id?: string
    role?: $Enums.Role
    ownedIncidents?: IncidentCreateNestedManyWithoutOwnerInput
    actedIncidentEvents?: IncidentEventCreateNestedManyWithoutActorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutCreatedIncidentsInput = {
    id?: string
    role?: $Enums.Role
    ownedIncidents?: IncidentUncheckedCreateNestedManyWithoutOwnerInput
    actedIncidentEvents?: IncidentEventUncheckedCreateNestedManyWithoutActorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutCreatedIncidentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedIncidentsInput, UserUncheckedCreateWithoutCreatedIncidentsInput>
  }

  export type CommentCreateWithoutIncidentInput = {
    id?: string
    message: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutIncidentInput = {
    id?: string
    authorId: string
    message: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutIncidentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutIncidentInput, CommentUncheckedCreateWithoutIncidentInput>
  }

  export type CommentCreateManyIncidentInputEnvelope = {
    data: CommentCreateManyIncidentInput | CommentCreateManyIncidentInput[]
    skipDuplicates?: boolean
  }

  export type IncidentEventCreateWithoutIncidentInput = {
    id?: string
    eventType: $Enums.EventType
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor?: UserCreateNestedOneWithoutActedIncidentEventsInput
  }

  export type IncidentEventUncheckedCreateWithoutIncidentInput = {
    id?: string
    actorId?: string | null
    eventType: $Enums.EventType
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IncidentEventCreateOrConnectWithoutIncidentInput = {
    where: IncidentEventWhereUniqueInput
    create: XOR<IncidentEventCreateWithoutIncidentInput, IncidentEventUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentEventCreateManyIncidentInputEnvelope = {
    data: IncidentEventCreateManyIncidentInput | IncidentEventCreateManyIncidentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedIncidentsInput = {
    update: XOR<UserUpdateWithoutOwnedIncidentsInput, UserUncheckedUpdateWithoutOwnedIncidentsInput>
    create: XOR<UserCreateWithoutOwnedIncidentsInput, UserUncheckedCreateWithoutOwnedIncidentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedIncidentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedIncidentsInput, UserUncheckedUpdateWithoutOwnedIncidentsInput>
  }

  export type UserUpdateWithoutOwnedIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdIncidents?: IncidentUpdateManyWithoutCreatedByNestedInput
    actedIncidentEvents?: IncidentEventUpdateManyWithoutActorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdIncidents?: IncidentUncheckedUpdateManyWithoutCreatedByNestedInput
    actedIncidentEvents?: IncidentEventUncheckedUpdateManyWithoutActorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUpsertWithoutCreatedIncidentsInput = {
    update: XOR<UserUpdateWithoutCreatedIncidentsInput, UserUncheckedUpdateWithoutCreatedIncidentsInput>
    create: XOR<UserCreateWithoutCreatedIncidentsInput, UserUncheckedCreateWithoutCreatedIncidentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedIncidentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedIncidentsInput, UserUncheckedUpdateWithoutCreatedIncidentsInput>
  }

  export type UserUpdateWithoutCreatedIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ownedIncidents?: IncidentUpdateManyWithoutOwnerNestedInput
    actedIncidentEvents?: IncidentEventUpdateManyWithoutActorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ownedIncidents?: IncidentUncheckedUpdateManyWithoutOwnerNestedInput
    actedIncidentEvents?: IncidentEventUncheckedUpdateManyWithoutActorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutIncidentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutIncidentInput, CommentUncheckedUpdateWithoutIncidentInput>
    create: XOR<CommentCreateWithoutIncidentInput, CommentUncheckedCreateWithoutIncidentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutIncidentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutIncidentInput, CommentUncheckedUpdateWithoutIncidentInput>
  }

  export type CommentUpdateManyWithWhereWithoutIncidentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutIncidentInput>
  }

  export type IncidentEventUpsertWithWhereUniqueWithoutIncidentInput = {
    where: IncidentEventWhereUniqueInput
    update: XOR<IncidentEventUpdateWithoutIncidentInput, IncidentEventUncheckedUpdateWithoutIncidentInput>
    create: XOR<IncidentEventCreateWithoutIncidentInput, IncidentEventUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentEventUpdateWithWhereUniqueWithoutIncidentInput = {
    where: IncidentEventWhereUniqueInput
    data: XOR<IncidentEventUpdateWithoutIncidentInput, IncidentEventUncheckedUpdateWithoutIncidentInput>
  }

  export type IncidentEventUpdateManyWithWhereWithoutIncidentInput = {
    where: IncidentEventScalarWhereInput
    data: XOR<IncidentEventUpdateManyMutationInput, IncidentEventUncheckedUpdateManyWithoutIncidentInput>
  }

  export type IncidentCreateWithoutEventsInput = {
    id?: string
    title: string
    description: string
    severity?: $Enums.Severity | null
    status?: $Enums.Status
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    closedAt?: Date | string | null
    currentSlaStartAt: Date | string
    slaTargetMinutes?: number | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedIncidentsInput
    createdBy: UserCreateNestedOneWithoutCreatedIncidentsInput
    comments?: CommentCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutEventsInput = {
    id?: string
    title: string
    description: string
    severity?: $Enums.Severity | null
    status?: $Enums.Status
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    closedAt?: Date | string | null
    currentSlaStartAt: Date | string
    slaTargetMinutes?: number | null
    ownerId: string
    createdById: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutEventsInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutEventsInput, IncidentUncheckedCreateWithoutEventsInput>
  }

  export type UserCreateWithoutActedIncidentEventsInput = {
    id?: string
    role?: $Enums.Role
    ownedIncidents?: IncidentCreateNestedManyWithoutOwnerInput
    createdIncidents?: IncidentCreateNestedManyWithoutCreatedByInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutActedIncidentEventsInput = {
    id?: string
    role?: $Enums.Role
    ownedIncidents?: IncidentUncheckedCreateNestedManyWithoutOwnerInput
    createdIncidents?: IncidentUncheckedCreateNestedManyWithoutCreatedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutActedIncidentEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActedIncidentEventsInput, UserUncheckedCreateWithoutActedIncidentEventsInput>
  }

  export type IncidentUpsertWithoutEventsInput = {
    update: XOR<IncidentUpdateWithoutEventsInput, IncidentUncheckedUpdateWithoutEventsInput>
    create: XOR<IncidentCreateWithoutEventsInput, IncidentUncheckedCreateWithoutEventsInput>
    where?: IncidentWhereInput
  }

  export type IncidentUpdateToOneWithWhereWithoutEventsInput = {
    where?: IncidentWhereInput
    data: XOR<IncidentUpdateWithoutEventsInput, IncidentUncheckedUpdateWithoutEventsInput>
  }

  export type IncidentUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSlaStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slaTargetMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedIncidentsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedIncidentsNestedInput
    comments?: CommentUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSlaStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slaTargetMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type UserUpsertWithoutActedIncidentEventsInput = {
    update: XOR<UserUpdateWithoutActedIncidentEventsInput, UserUncheckedUpdateWithoutActedIncidentEventsInput>
    create: XOR<UserCreateWithoutActedIncidentEventsInput, UserUncheckedCreateWithoutActedIncidentEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActedIncidentEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActedIncidentEventsInput, UserUncheckedUpdateWithoutActedIncidentEventsInput>
  }

  export type UserUpdateWithoutActedIncidentEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ownedIncidents?: IncidentUpdateManyWithoutOwnerNestedInput
    createdIncidents?: IncidentUpdateManyWithoutCreatedByNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutActedIncidentEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ownedIncidents?: IncidentUncheckedUpdateManyWithoutOwnerNestedInput
    createdIncidents?: IncidentUncheckedUpdateManyWithoutCreatedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type IncidentCreateManyOwnerInput = {
    id?: string
    title: string
    description: string
    severity?: $Enums.Severity | null
    status?: $Enums.Status
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    closedAt?: Date | string | null
    currentSlaStartAt: Date | string
    slaTargetMinutes?: number | null
    createdById: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentCreateManyCreatedByInput = {
    id?: string
    title: string
    description: string
    severity?: $Enums.Severity | null
    status?: $Enums.Status
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    closedAt?: Date | string | null
    currentSlaStartAt: Date | string
    slaTargetMinutes?: number | null
    ownerId: string
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentEventCreateManyActorInput = {
    id?: string
    incidentId: string
    eventType: $Enums.EventType
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CommentCreateManyAuthorInput = {
    id?: string
    incidentId: string
    message: string
    createdAt?: Date | string
  }

  export type IncidentUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSlaStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slaTargetMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedIncidentsNestedInput
    comments?: CommentUpdateManyWithoutIncidentNestedInput
    events?: IncidentEventUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSlaStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slaTargetMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutIncidentNestedInput
    events?: IncidentEventUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSlaStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slaTargetMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSlaStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slaTargetMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedIncidentsNestedInput
    comments?: CommentUpdateManyWithoutIncidentNestedInput
    events?: IncidentEventUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSlaStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slaTargetMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutIncidentNestedInput
    events?: IncidentEventUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: NullableEnumSeverityFieldUpdateOperationsInput | $Enums.Severity | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentSlaStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slaTargetMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    ownerId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEventUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incident?: IncidentUpdateOneRequiredWithoutEventsNestedInput
  }

  export type IncidentEventUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEventUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incident?: IncidentUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyIncidentInput = {
    id?: string
    authorId: string
    message: string
    createdAt?: Date | string
  }

  export type IncidentEventCreateManyIncidentInput = {
    id?: string
    actorId?: string | null
    eventType: $Enums.EventType
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEventUpdateWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneWithoutActedIncidentEventsNestedInput
  }

  export type IncidentEventUncheckedUpdateWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEventUncheckedUpdateManyWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}