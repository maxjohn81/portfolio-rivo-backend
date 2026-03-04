-- CreateTable
CREATE TABLE "administrateurs" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mot_de_passe" TEXT NOT NULL,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "administrateurs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projets" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "lien_github" TEXT,
    "lien_demo" TEXT,
    "mis_en_avant" BOOLEAN NOT NULL DEFAULT false,
    "statut" TEXT NOT NULL DEFAULT 'brouillon',
    "ordre_affichage" INTEGER,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_modification" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "competences" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "icone" TEXT,
    "categorie" TEXT NOT NULL,
    "ordre_affichage" INTEGER,

    CONSTRAINT "competences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experiences" (
    "id" SERIAL NOT NULL,
    "entreprise" TEXT NOT NULL,
    "poste" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date_debut" TIMESTAMP(3) NOT NULL,
    "date_fin" TIMESTAMP(3),
    "en_cours" BOOLEAN NOT NULL DEFAULT false,
    "ordre_affichage" INTEGER,

    CONSTRAINT "experiences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educations" (
    "id" SERIAL NOT NULL,
    "etablissement" TEXT NOT NULL,
    "diplome" TEXT NOT NULL,
    "domaine" TEXT NOT NULL,
    "annee_debut" INTEGER NOT NULL,
    "annee_fin" INTEGER,
    "description" TEXT,
    "ordre_affichage" INTEGER,

    CONSTRAINT "educations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" SERIAL NOT NULL,
    "nom_fichier" TEXT NOT NULL,
    "chemin" TEXT NOT NULL,
    "date_upload" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "administrateurs_email_key" ON "administrateurs"("email");
