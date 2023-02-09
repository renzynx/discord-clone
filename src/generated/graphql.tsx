import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Time: any;
  UUID: any;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `guilds` collection */
  deleteFromguildsCollection: GuildsDeleteResponse;
  /** Deletes zero or more records from the `members` collection */
  deleteFrommembersCollection: MembersDeleteResponse;
  /** Deletes zero or more records from the `profiles` collection */
  deleteFromprofilesCollection: ProfilesDeleteResponse;
  /** Adds one or more `guilds` records to the collection */
  insertIntoguildsCollection?: Maybe<GuildsInsertResponse>;
  /** Adds one or more `members` records to the collection */
  insertIntomembersCollection?: Maybe<MembersInsertResponse>;
  /** Adds one or more `profiles` records to the collection */
  insertIntoprofilesCollection?: Maybe<ProfilesInsertResponse>;
  /** Updates zero or more records in the `guilds` collection */
  updateguildsCollection: GuildsUpdateResponse;
  /** Updates zero or more records in the `members` collection */
  updatemembersCollection: MembersUpdateResponse;
  /** Updates zero or more records in the `profiles` collection */
  updateprofilesCollection: ProfilesUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromguildsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GuildsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrommembersCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<MembersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromprofilesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProfilesFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoguildsCollectionArgs = {
  objects: Array<GuildsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntomembersCollectionArgs = {
  objects: Array<MembersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoprofilesCollectionArgs = {
  objects: Array<ProfilesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateguildsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<GuildsFilter>;
  set: GuildsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatemembersCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<MembersFilter>;
  set: MembersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateprofilesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProfilesFilter>;
  set: ProfilesUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID'];
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `guilds` */
  guildsCollection?: Maybe<GuildsConnection>;
  /** A pagable collection of type `members` */
  membersCollection?: Maybe<MembersConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `profiles` */
  profilesCollection?: Maybe<ProfilesConnection>;
};


/** The root type for querying data */
export type QueryGuildsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GuildsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GuildsOrderBy>>;
};


/** The root type for querying data */
export type QueryMembersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<MembersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MembersOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root type for querying data */
export type QueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProfilesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProfilesOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<Scalars['Time']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']>;
};

export type Guilds = Node & {
  __typename?: 'guilds';
  created_at?: Maybe<Scalars['Datetime']>;
  icon_url?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  membersCollection?: Maybe<MembersConnection>;
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  owner_id?: Maybe<Scalars['UUID']>;
  profiles?: Maybe<Profiles>;
};


export type GuildsMembersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<MembersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MembersOrderBy>>;
};

export type GuildsConnection = {
  __typename?: 'guildsConnection';
  edges: Array<GuildsEdge>;
  pageInfo: PageInfo;
};

export type GuildsDeleteResponse = {
  __typename?: 'guildsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Guilds>;
};

export type GuildsEdge = {
  __typename?: 'guildsEdge';
  cursor: Scalars['String'];
  node: Guilds;
};

export type GuildsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  icon_url?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  owner_id?: InputMaybe<UuidFilter>;
};

export type GuildsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  icon_url?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['UUID']>;
};

export type GuildsInsertResponse = {
  __typename?: 'guildsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Guilds>;
};

export type GuildsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  icon_url?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  owner_id?: InputMaybe<OrderByDirection>;
};

export type GuildsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  icon_url?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['UUID']>;
};

export type GuildsUpdateResponse = {
  __typename?: 'guildsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Guilds>;
};

export type Members = Node & {
  __typename?: 'members';
  guild_id?: Maybe<Scalars['UUID']>;
  guilds?: Maybe<Guilds>;
  id: Scalars['UUID'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  profiles?: Maybe<Profiles>;
  user_id?: Maybe<Scalars['UUID']>;
};

export type MembersConnection = {
  __typename?: 'membersConnection';
  edges: Array<MembersEdge>;
  pageInfo: PageInfo;
};

export type MembersDeleteResponse = {
  __typename?: 'membersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Members>;
};

export type MembersEdge = {
  __typename?: 'membersEdge';
  cursor: Scalars['String'];
  node: Members;
};

export type MembersFilter = {
  guild_id?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type MembersInsertInput = {
  guild_id?: InputMaybe<Scalars['UUID']>;
  id?: InputMaybe<Scalars['UUID']>;
  user_id?: InputMaybe<Scalars['UUID']>;
};

export type MembersInsertResponse = {
  __typename?: 'membersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Members>;
};

export type MembersOrderBy = {
  guild_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type MembersUpdateInput = {
  guild_id?: InputMaybe<Scalars['UUID']>;
  id?: InputMaybe<Scalars['UUID']>;
  user_id?: InputMaybe<Scalars['UUID']>;
};

export type MembersUpdateResponse = {
  __typename?: 'membersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Members>;
};

export type Profiles = Node & {
  __typename?: 'profiles';
  avatar_url?: Maybe<Scalars['String']>;
  discriminator?: Maybe<Scalars['String']>;
  guildsCollection?: Maybe<GuildsConnection>;
  id: Scalars['UUID'];
  membersCollection?: Maybe<MembersConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  updated_at?: Maybe<Scalars['Datetime']>;
  username?: Maybe<Scalars['String']>;
};


export type ProfilesGuildsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GuildsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GuildsOrderBy>>;
};


export type ProfilesMembersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<MembersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MembersOrderBy>>;
};

export type ProfilesConnection = {
  __typename?: 'profilesConnection';
  edges: Array<ProfilesEdge>;
  pageInfo: PageInfo;
};

export type ProfilesDeleteResponse = {
  __typename?: 'profilesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesEdge = {
  __typename?: 'profilesEdge';
  cursor: Scalars['String'];
  node: Profiles;
};

export type ProfilesFilter = {
  avatar_url?: InputMaybe<StringFilter>;
  discriminator?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type ProfilesInsertInput = {
  avatar_url?: InputMaybe<Scalars['String']>;
  discriminator?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ProfilesInsertResponse = {
  __typename?: 'profilesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesOrderBy = {
  avatar_url?: InputMaybe<OrderByDirection>;
  discriminator?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  username?: InputMaybe<OrderByDirection>;
};

export type ProfilesUpdateInput = {
  avatar_url?: InputMaybe<Scalars['String']>;
  discriminator?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ProfilesUpdateResponse = {
  __typename?: 'profilesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type GetProfileQueryVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']>;
}>;


export type GetProfileQuery = { __typename?: 'Query', profilesCollection?: { __typename?: 'profilesConnection', edges: Array<{ __typename?: 'profilesEdge', node: { __typename?: 'profiles', id: any, username?: string | null, avatar_url?: string | null } }> } | null };


export const GetProfileDocument = gql`
    query GetProfile($id: UUID) {
  profilesCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        id
        username
        avatar_url
      }
    }
  }
}
    `;

export function useGetProfileQuery(options?: Omit<Urql.UseQueryArgs<GetProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProfileQuery, GetProfileQueryVariables>({ query: GetProfileDocument, ...options });
};