/*
 Navicat Premium Data Transfer

 Source Server         : localhost_postgres
 Source Server Type    : PostgreSQL
 Source Server Version : 140001
 Source Host           : 127.0.0.1:5433
 Source Catalog        : geologDB
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140001
 File Encoding         : 65001

 Date: 12/01/2022 11:02:45
*/


-- ----------------------------
-- Table structure for analysisType
-- ----------------------------
DROP TABLE IF EXISTS "public"."analysisType";
CREATE TABLE "public"."analysisType" (
  "id" int4 NOT NULL DEFAULT nextval('"analysisType_id_seq"'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for author2book
-- ----------------------------
DROP TABLE IF EXISTS "public"."author2book";
CREATE TABLE "public"."author2book" (
  "bookId" int4 NOT NULL,
  "authorId" int4 NOT NULL
)
;

-- ----------------------------
-- Table structure for authors
-- ----------------------------
DROP TABLE IF EXISTS "public"."authors";
CREATE TABLE "public"."authors" (
  "id" int4 NOT NULL DEFAULT nextval('authors_id_seq'::regclass),
  "Author" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Table structure for book2mineral
-- ----------------------------
DROP TABLE IF EXISTS "public"."book2mineral";
CREATE TABLE "public"."book2mineral" (
  "bookId" int4 NOT NULL,
  "mineralId" int4 NOT NULL,
  "notice" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for book2sample
-- ----------------------------
DROP TABLE IF EXISTS "public"."book2sample";
CREATE TABLE "public"."book2sample" (
  "bookId" int4 NOT NULL,
  "sampleId" int4 NOT NULL,
  "notice" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for book2section
-- ----------------------------
DROP TABLE IF EXISTS "public"."book2section";
CREATE TABLE "public"."book2section" (
  "bookId" int4 NOT NULL,
  "sectionId" int4 NOT NULL,
  "notice" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for book2structure
-- ----------------------------
DROP TABLE IF EXISTS "public"."book2structure";
CREATE TABLE "public"."book2structure" (
  "bookId" int4 NOT NULL,
  "structureId" int4 NOT NULL,
  "notice" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for book2substance
-- ----------------------------
DROP TABLE IF EXISTS "public"."book2substance";
CREATE TABLE "public"."book2substance" (
  "bookId" int4 NOT NULL,
  "substanceId" int4 NOT NULL,
  "notice" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for book2texture
-- ----------------------------
DROP TABLE IF EXISTS "public"."book2texture";
CREATE TABLE "public"."book2texture" (
  "bookId" int4 NOT NULL,
  "textureId" int4 NOT NULL,
  "notice" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS "public"."books";
CREATE TABLE "public"."books" (
  "id" int4 NOT NULL DEFAULT nextval('books_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "langTypeId" int4,
  "textTypeId" int4,
  "year" date,
  "publisher" varchar(255) COLLATE "pg_catalog"."default",
  "source" varchar(255) COLLATE "pg_catalog"."default",
  "ref" varchar(255) COLLATE "pg_catalog"."default",
  "DOI" text COLLATE "pg_catalog"."default",
  "GOST" text COLLATE "pg_catalog"."default",
  "MLA" text COLLATE "pg_catalog"."default",
  "APA" text COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "notice" text COLLATE "pg_catalog"."default",
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL,
  "deletedAt" timestamptz(6)
)
;

-- ----------------------------
-- Table structure for langTypes
-- ----------------------------
DROP TABLE IF EXISTS "public"."langTypes";
CREATE TABLE "public"."langTypes" (
  "id" int4 NOT NULL DEFAULT nextval('"langTypes_id_seq"'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for mineral2sample
-- ----------------------------
DROP TABLE IF EXISTS "public"."mineral2sample";
CREATE TABLE "public"."mineral2sample" (
  "mineralId" int4 NOT NULL,
  "sampleId" int4 NOT NULL
)
;

-- ----------------------------
-- Table structure for mineral2section
-- ----------------------------
DROP TABLE IF EXISTS "public"."mineral2section";
CREATE TABLE "public"."mineral2section" (
  "mineralId" int4 NOT NULL,
  "sectionId" int4 NOT NULL
)
;

-- ----------------------------
-- Table structure for minerals
-- ----------------------------
DROP TABLE IF EXISTS "public"."minerals";
CREATE TABLE "public"."minerals" (
  "id" int4 NOT NULL DEFAULT nextval('minerals_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for role2user
-- ----------------------------
DROP TABLE IF EXISTS "public"."role2user";
CREATE TABLE "public"."role2user" (
  "userId" int4 NOT NULL,
  "roleId" int4 NOT NULL
)
;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS "public"."roles";
CREATE TABLE "public"."roles" (
  "id" int4 NOT NULL DEFAULT nextval('roles_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "description" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for sampleAnalysis
-- ----------------------------
DROP TABLE IF EXISTS "public"."sampleAnalysis";
CREATE TABLE "public"."sampleAnalysis" (
  "id" int4 NOT NULL DEFAULT nextval('"sampleAnalysis_id_seq"'::regclass),
  "sampleID" int4,
  "typeId" int4,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL,
  "deletedAt" timestamptz(6)
)
;

-- ----------------------------
-- Table structure for samplePhoto
-- ----------------------------
DROP TABLE IF EXISTS "public"."samplePhoto";
CREATE TABLE "public"."samplePhoto" (
  "id" int4 NOT NULL DEFAULT nextval('"samplePhoto_id_seq"'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "sampleId" int4,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL,
  "deletedAt" timestamptz(6)
)
;

-- ----------------------------
-- Table structure for samples
-- ----------------------------
DROP TABLE IF EXISTS "public"."samples";
CREATE TABLE "public"."samples" (
  "id" int4 NOT NULL DEFAULT nextval('samples_id_seq'::regclass),
  "userId" int4,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar(255) COLLATE "pg_catalog"."default",
  "notice" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL,
  "deletedAt" timestamptz(6)
)
;

-- ----------------------------
-- Table structure for sectionAnalysis
-- ----------------------------
DROP TABLE IF EXISTS "public"."sectionAnalysis";
CREATE TABLE "public"."sectionAnalysis" (
  "id" int4 NOT NULL DEFAULT nextval('"sectionAnalysis_id_seq"'::regclass),
  "sectionID" int4,
  "typeId" int4,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL,
  "deletedAt" timestamptz(6)
)
;

-- ----------------------------
-- Table structure for sectionPhoto
-- ----------------------------
DROP TABLE IF EXISTS "public"."sectionPhoto";
CREATE TABLE "public"."sectionPhoto" (
  "id" int4 NOT NULL DEFAULT nextval('"sectionPhoto_id_seq"'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "sectionId" int4,
  "description" text COLLATE "pg_catalog"."default",
  "root" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL,
  "deletedAt" timestamptz(6)
)
;

-- ----------------------------
-- Table structure for sections
-- ----------------------------
DROP TABLE IF EXISTS "public"."sections";
CREATE TABLE "public"."sections" (
  "id" int4 NOT NULL DEFAULT nextval('sections_id_seq'::regclass),
  "sampleID" int4,
  "typeId" int4,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "description" text COLLATE "pg_catalog"."default",
  "notice" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL,
  "deletedAt" timestamptz(6)
)
;

-- ----------------------------
-- Table structure for sectionTypes
-- ----------------------------
DROP TABLE IF EXISTS "public"."sectionTypes";
CREATE TABLE "public"."sectionTypes" (
  "id" int4 NOT NULL DEFAULT nextval('"sectionTypes_id_seq"'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for structure2sample
-- ----------------------------
DROP TABLE IF EXISTS "public"."structure2sample";
CREATE TABLE "public"."structure2sample" (
  "structureId" int4 NOT NULL,
  "sampleId" int4 NOT NULL
)
;

-- ----------------------------
-- Table structure for structure2section
-- ----------------------------
DROP TABLE IF EXISTS "public"."structure2section";
CREATE TABLE "public"."structure2section" (
  "structureId" int4 NOT NULL,
  "sectionId" int4 NOT NULL
)
;

-- ----------------------------
-- Table structure for structures
-- ----------------------------
DROP TABLE IF EXISTS "public"."structures";
CREATE TABLE "public"."structures" (
  "id" int4 NOT NULL DEFAULT nextval('structures_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for substance2sample
-- ----------------------------
DROP TABLE IF EXISTS "public"."substance2sample";
CREATE TABLE "public"."substance2sample" (
  "substanceId" int4 NOT NULL,
  "analysisId" int4 NOT NULL,
  "percent" numeric
)
;

-- ----------------------------
-- Table structure for substance2section
-- ----------------------------
DROP TABLE IF EXISTS "public"."substance2section";
CREATE TABLE "public"."substance2section" (
  "substanceId" int4 NOT NULL,
  "analysisId" int4 NOT NULL,
  "percent" numeric
)
;

-- ----------------------------
-- Table structure for substances
-- ----------------------------
DROP TABLE IF EXISTS "public"."substances";
CREATE TABLE "public"."substances" (
  "id" int4 NOT NULL DEFAULT nextval('substances_id_seq'::regclass),
  "formula" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "mass" numeric
)
;

-- ----------------------------
-- Table structure for tag2book
-- ----------------------------
DROP TABLE IF EXISTS "public"."tag2book";
CREATE TABLE "public"."tag2book" (
  "bookId" int4 NOT NULL,
  "tagId" int4 NOT NULL
)
;

-- ----------------------------
-- Table structure for tags
-- ----------------------------
DROP TABLE IF EXISTS "public"."tags";
CREATE TABLE "public"."tags" (
  "id" int4 NOT NULL DEFAULT nextval('tags_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for textTypes
-- ----------------------------
DROP TABLE IF EXISTS "public"."textTypes";
CREATE TABLE "public"."textTypes" (
  "id" int4 NOT NULL DEFAULT nextval('"textTypes_id_seq"'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for texture2sample
-- ----------------------------
DROP TABLE IF EXISTS "public"."texture2sample";
CREATE TABLE "public"."texture2sample" (
  "textureId" int4 NOT NULL,
  "sampleId" int4 NOT NULL
)
;

-- ----------------------------
-- Table structure for texture2section
-- ----------------------------
DROP TABLE IF EXISTS "public"."texture2section";
CREATE TABLE "public"."texture2section" (
  "textureId" int4 NOT NULL,
  "sectionId" int4 NOT NULL
)
;

-- ----------------------------
-- Table structure for textures
-- ----------------------------
DROP TABLE IF EXISTS "public"."textures";
CREATE TABLE "public"."textures" (
  "id" int4 NOT NULL DEFAULT nextval('textures_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
  "login" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "lastName" varchar(255) COLLATE "pg_catalog"."default",
  "firstName" varchar(255) COLLATE "pg_catalog"."default",
  "patronymic" varchar(255) COLLATE "pg_catalog"."default",
  "phone" varchar(255) COLLATE "pg_catalog"."default",
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "notice" text COLLATE "pg_catalog"."default",
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL,
  "deletedAt" timestamptz(6)
)
;

-- ----------------------------
-- Uniques structure for table analysisType
-- ----------------------------
ALTER TABLE "public"."analysisType" ADD CONSTRAINT "analysisType_name_key" UNIQUE ("name");

-- ----------------------------
-- Primary Key structure for table analysisType
-- ----------------------------
ALTER TABLE "public"."analysisType" ADD CONSTRAINT "analysisType_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table author2book
-- ----------------------------
ALTER TABLE "public"."author2book" ADD CONSTRAINT "author2book_pkey" PRIMARY KEY ("bookId", "authorId");

-- ----------------------------
-- Uniques structure for table authors
-- ----------------------------
ALTER TABLE "public"."authors" ADD CONSTRAINT "authors_Author_key" UNIQUE ("Author");

-- ----------------------------
-- Primary Key structure for table authors
-- ----------------------------
ALTER TABLE "public"."authors" ADD CONSTRAINT "authors_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table book2mineral
-- ----------------------------
ALTER TABLE "public"."book2mineral" ADD CONSTRAINT "book2mineral_pkey" PRIMARY KEY ("bookId", "mineralId");

-- ----------------------------
-- Primary Key structure for table book2sample
-- ----------------------------
ALTER TABLE "public"."book2sample" ADD CONSTRAINT "book2sample_pkey" PRIMARY KEY ("bookId", "sampleId");

-- ----------------------------
-- Primary Key structure for table book2section
-- ----------------------------
ALTER TABLE "public"."book2section" ADD CONSTRAINT "book2section_pkey" PRIMARY KEY ("bookId", "sectionId");

-- ----------------------------
-- Primary Key structure for table book2structure
-- ----------------------------
ALTER TABLE "public"."book2structure" ADD CONSTRAINT "book2structure_pkey" PRIMARY KEY ("bookId", "structureId");

-- ----------------------------
-- Primary Key structure for table book2substance
-- ----------------------------
ALTER TABLE "public"."book2substance" ADD CONSTRAINT "book2substance_pkey" PRIMARY KEY ("bookId", "substanceId");

-- ----------------------------
-- Primary Key structure for table book2texture
-- ----------------------------
ALTER TABLE "public"."book2texture" ADD CONSTRAINT "book2texture_pkey" PRIMARY KEY ("bookId", "textureId");

-- ----------------------------
-- Primary Key structure for table books
-- ----------------------------
ALTER TABLE "public"."books" ADD CONSTRAINT "books_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table langTypes
-- ----------------------------
ALTER TABLE "public"."langTypes" ADD CONSTRAINT "langTypes_name_key" UNIQUE ("name");

-- ----------------------------
-- Primary Key structure for table langTypes
-- ----------------------------
ALTER TABLE "public"."langTypes" ADD CONSTRAINT "langTypes_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table mineral2sample
-- ----------------------------
ALTER TABLE "public"."mineral2sample" ADD CONSTRAINT "mineral2sample_pkey" PRIMARY KEY ("mineralId", "sampleId");

-- ----------------------------
-- Primary Key structure for table mineral2section
-- ----------------------------
ALTER TABLE "public"."mineral2section" ADD CONSTRAINT "mineral2section_pkey" PRIMARY KEY ("mineralId", "sectionId");

-- ----------------------------
-- Uniques structure for table minerals
-- ----------------------------
ALTER TABLE "public"."minerals" ADD CONSTRAINT "minerals_name_key" UNIQUE ("name");

-- ----------------------------
-- Primary Key structure for table minerals
-- ----------------------------
ALTER TABLE "public"."minerals" ADD CONSTRAINT "minerals_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table role2user
-- ----------------------------
ALTER TABLE "public"."role2user" ADD CONSTRAINT "role2user_pkey" PRIMARY KEY ("userId", "roleId");

-- ----------------------------
-- Uniques structure for table roles
-- ----------------------------
ALTER TABLE "public"."roles" ADD CONSTRAINT "roles_name_key" UNIQUE ("name");

-- ----------------------------
-- Primary Key structure for table roles
-- ----------------------------
ALTER TABLE "public"."roles" ADD CONSTRAINT "roles_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table sampleAnalysis
-- ----------------------------
ALTER TABLE "public"."sampleAnalysis" ADD CONSTRAINT "sampleAnalysis_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table samplePhoto
-- ----------------------------
ALTER TABLE "public"."samplePhoto" ADD CONSTRAINT "samplePhoto_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table samples
-- ----------------------------
ALTER TABLE "public"."samples" ADD CONSTRAINT "samples_name_key" UNIQUE ("name");

-- ----------------------------
-- Primary Key structure for table samples
-- ----------------------------
ALTER TABLE "public"."samples" ADD CONSTRAINT "samples_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table sectionAnalysis
-- ----------------------------
ALTER TABLE "public"."sectionAnalysis" ADD CONSTRAINT "sectionAnalysis_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table sectionPhoto
-- ----------------------------
ALTER TABLE "public"."sectionPhoto" ADD CONSTRAINT "sectionPhoto_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table sections
-- ----------------------------
ALTER TABLE "public"."sections" ADD CONSTRAINT "sections_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table sectionTypes
-- ----------------------------
ALTER TABLE "public"."sectionTypes" ADD CONSTRAINT "sectionTypes_name_key" UNIQUE ("name");

-- ----------------------------
-- Primary Key structure for table sectionTypes
-- ----------------------------
ALTER TABLE "public"."sectionTypes" ADD CONSTRAINT "sectionTypes_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table structure2sample
-- ----------------------------
ALTER TABLE "public"."structure2sample" ADD CONSTRAINT "structure2sample_pkey" PRIMARY KEY ("structureId", "sampleId");

-- ----------------------------
-- Primary Key structure for table structure2section
-- ----------------------------
ALTER TABLE "public"."structure2section" ADD CONSTRAINT "structure2section_pkey" PRIMARY KEY ("structureId", "sectionId");

-- ----------------------------
-- Uniques structure for table structures
-- ----------------------------
ALTER TABLE "public"."structures" ADD CONSTRAINT "structures_name_key" UNIQUE ("name");

-- ----------------------------
-- Primary Key structure for table structures
-- ----------------------------
ALTER TABLE "public"."structures" ADD CONSTRAINT "structures_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table substance2sample
-- ----------------------------
ALTER TABLE "public"."substance2sample" ADD CONSTRAINT "substance2sample_pkey" PRIMARY KEY ("substanceId", "analysisId");

-- ----------------------------
-- Primary Key structure for table substance2section
-- ----------------------------
ALTER TABLE "public"."substance2section" ADD CONSTRAINT "substance2section_pkey" PRIMARY KEY ("substanceId", "analysisId");

-- ----------------------------
-- Uniques structure for table substances
-- ----------------------------
ALTER TABLE "public"."substances" ADD CONSTRAINT "substances_formula_key" UNIQUE ("formula");

-- ----------------------------
-- Primary Key structure for table substances
-- ----------------------------
ALTER TABLE "public"."substances" ADD CONSTRAINT "substances_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tag2book
-- ----------------------------
ALTER TABLE "public"."tag2book" ADD CONSTRAINT "tag2book_pkey" PRIMARY KEY ("bookId", "tagId");

-- ----------------------------
-- Uniques structure for table tags
-- ----------------------------
ALTER TABLE "public"."tags" ADD CONSTRAINT "tags_name_key" UNIQUE ("name");

-- ----------------------------
-- Primary Key structure for table tags
-- ----------------------------
ALTER TABLE "public"."tags" ADD CONSTRAINT "tags_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table textTypes
-- ----------------------------
ALTER TABLE "public"."textTypes" ADD CONSTRAINT "textTypes_name_key" UNIQUE ("name");

-- ----------------------------
-- Primary Key structure for table textTypes
-- ----------------------------
ALTER TABLE "public"."textTypes" ADD CONSTRAINT "textTypes_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table texture2sample
-- ----------------------------
ALTER TABLE "public"."texture2sample" ADD CONSTRAINT "texture2sample_pkey" PRIMARY KEY ("textureId", "sampleId");

-- ----------------------------
-- Primary Key structure for table texture2section
-- ----------------------------
ALTER TABLE "public"."texture2section" ADD CONSTRAINT "texture2section_pkey" PRIMARY KEY ("textureId", "sectionId");

-- ----------------------------
-- Uniques structure for table textures
-- ----------------------------
ALTER TABLE "public"."textures" ADD CONSTRAINT "textures_name_key" UNIQUE ("name");

-- ----------------------------
-- Primary Key structure for table textures
-- ----------------------------
ALTER TABLE "public"."textures" ADD CONSTRAINT "textures_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_login_key" UNIQUE ("login");

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table author2book
-- ----------------------------
ALTER TABLE "public"."author2book" ADD CONSTRAINT "author2book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."authors" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."author2book" ADD CONSTRAINT "author2book_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."books" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table book2mineral
-- ----------------------------
ALTER TABLE "public"."book2mineral" ADD CONSTRAINT "book2mineral_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."books" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."book2mineral" ADD CONSTRAINT "book2mineral_mineralId_fkey" FOREIGN KEY ("mineralId") REFERENCES "public"."minerals" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table book2sample
-- ----------------------------
ALTER TABLE "public"."book2sample" ADD CONSTRAINT "book2sample_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."books" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."book2sample" ADD CONSTRAINT "book2sample_sampleId_fkey" FOREIGN KEY ("sampleId") REFERENCES "public"."samples" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table book2section
-- ----------------------------
ALTER TABLE "public"."book2section" ADD CONSTRAINT "book2section_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."books" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."book2section" ADD CONSTRAINT "book2section_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "public"."sections" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table book2structure
-- ----------------------------
ALTER TABLE "public"."book2structure" ADD CONSTRAINT "book2structure_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."books" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."book2structure" ADD CONSTRAINT "book2structure_structureId_fkey" FOREIGN KEY ("structureId") REFERENCES "public"."structures" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table book2substance
-- ----------------------------
ALTER TABLE "public"."book2substance" ADD CONSTRAINT "book2substance_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."books" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."book2substance" ADD CONSTRAINT "book2substance_substanceId_fkey" FOREIGN KEY ("substanceId") REFERENCES "public"."substances" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table book2texture
-- ----------------------------
ALTER TABLE "public"."book2texture" ADD CONSTRAINT "book2texture_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."books" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."book2texture" ADD CONSTRAINT "book2texture_textureId_fkey" FOREIGN KEY ("textureId") REFERENCES "public"."textures" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table books
-- ----------------------------
ALTER TABLE "public"."books" ADD CONSTRAINT "books_langTypeId_fkey" FOREIGN KEY ("langTypeId") REFERENCES "public"."langTypes" ("id") ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE "public"."books" ADD CONSTRAINT "books_textTypeId_fkey" FOREIGN KEY ("textTypeId") REFERENCES "public"."textTypes" ("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table mineral2sample
-- ----------------------------
ALTER TABLE "public"."mineral2sample" ADD CONSTRAINT "mineral2sample_mineralId_fkey" FOREIGN KEY ("mineralId") REFERENCES "public"."minerals" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."mineral2sample" ADD CONSTRAINT "mineral2sample_sampleId_fkey" FOREIGN KEY ("sampleId") REFERENCES "public"."samples" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table mineral2section
-- ----------------------------
ALTER TABLE "public"."mineral2section" ADD CONSTRAINT "mineral2section_mineralId_fkey" FOREIGN KEY ("mineralId") REFERENCES "public"."minerals" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."mineral2section" ADD CONSTRAINT "mineral2section_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "public"."sections" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table role2user
-- ----------------------------
ALTER TABLE "public"."role2user" ADD CONSTRAINT "role2user_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."users" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."role2user" ADD CONSTRAINT "role2user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."roles" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table sampleAnalysis
-- ----------------------------
ALTER TABLE "public"."sampleAnalysis" ADD CONSTRAINT "sampleAnalysis_sampleID_fkey" FOREIGN KEY ("sampleID") REFERENCES "public"."samples" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."sampleAnalysis" ADD CONSTRAINT "sampleAnalysis_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "public"."analysisType" ("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table samplePhoto
-- ----------------------------
ALTER TABLE "public"."samplePhoto" ADD CONSTRAINT "samplePhoto_sampleId_fkey" FOREIGN KEY ("sampleId") REFERENCES "public"."samples" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table samples
-- ----------------------------
ALTER TABLE "public"."samples" ADD CONSTRAINT "samples_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users" ("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table sectionAnalysis
-- ----------------------------
ALTER TABLE "public"."sectionAnalysis" ADD CONSTRAINT "sectionAnalysis_sectionID_fkey" FOREIGN KEY ("sectionID") REFERENCES "public"."sections" ("id") ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE "public"."sectionAnalysis" ADD CONSTRAINT "sectionAnalysis_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "public"."analysisType" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table sectionPhoto
-- ----------------------------
ALTER TABLE "public"."sectionPhoto" ADD CONSTRAINT "sectionPhoto_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "public"."sections" ("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table sections
-- ----------------------------
ALTER TABLE "public"."sections" ADD CONSTRAINT "sections_sampleID_fkey" FOREIGN KEY ("sampleID") REFERENCES "public"."samples" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."sections" ADD CONSTRAINT "sections_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "public"."sectionTypes" ("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table structure2sample
-- ----------------------------
ALTER TABLE "public"."structure2sample" ADD CONSTRAINT "structure2sample_sampleId_fkey" FOREIGN KEY ("sampleId") REFERENCES "public"."samples" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."structure2sample" ADD CONSTRAINT "structure2sample_structureId_fkey" FOREIGN KEY ("structureId") REFERENCES "public"."structures" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table structure2section
-- ----------------------------
ALTER TABLE "public"."structure2section" ADD CONSTRAINT "structure2section_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "public"."sections" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."structure2section" ADD CONSTRAINT "structure2section_structureId_fkey" FOREIGN KEY ("structureId") REFERENCES "public"."structures" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table substance2sample
-- ----------------------------
ALTER TABLE "public"."substance2sample" ADD CONSTRAINT "substance2sample_analysisId_fkey" FOREIGN KEY ("analysisId") REFERENCES "public"."sampleAnalysis" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."substance2sample" ADD CONSTRAINT "substance2sample_substanceId_fkey" FOREIGN KEY ("substanceId") REFERENCES "public"."substances" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table substance2section
-- ----------------------------
ALTER TABLE "public"."substance2section" ADD CONSTRAINT "substance2section_analysisId_fkey" FOREIGN KEY ("analysisId") REFERENCES "public"."sectionAnalysis" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."substance2section" ADD CONSTRAINT "substance2section_substanceId_fkey" FOREIGN KEY ("substanceId") REFERENCES "public"."substances" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table tag2book
-- ----------------------------
ALTER TABLE "public"."tag2book" ADD CONSTRAINT "tag2book_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."books" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."tag2book" ADD CONSTRAINT "tag2book_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table texture2sample
-- ----------------------------
ALTER TABLE "public"."texture2sample" ADD CONSTRAINT "texture2sample_sampleId_fkey" FOREIGN KEY ("sampleId") REFERENCES "public"."samples" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."texture2sample" ADD CONSTRAINT "texture2sample_textureId_fkey" FOREIGN KEY ("textureId") REFERENCES "public"."textures" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table texture2section
-- ----------------------------
ALTER TABLE "public"."texture2section" ADD CONSTRAINT "texture2section_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "public"."sections" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."texture2section" ADD CONSTRAINT "texture2section_textureId_fkey" FOREIGN KEY ("textureId") REFERENCES "public"."textures" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
