# cda-spiltnshare

## Description

L'objectif de l'application est de permettre le partage des dépenses entre plusieurs personnes d'un même groupe : un unique payeur rentre le ticket sur l'application et le partage aux autres. Chacun sélectionne les éléments qu'il a consommé,et une fois l'ensemble des éléments sélectionnés, le paiement est effectué de manière équitable.

## Technos

- front : application *single page* React
- back : server ExpressJS
- base de données : SQlite

## Mise en place

### Étape 1 : mettre en place l'environnement de travail

- installer les dépendances du projet à l'aide de la commande `npm run postinstall`
- pour lancer le front et le back : `npm run project`

### Étape 2 : créer et remplir la base de données

- pour créer les tables de la base de données : `npm run db-create`
- pour insérer des données d'exemple dans la base de données : `npm run db-populate`

## Structure du projet

- front : fichiers React sources
- back : fichiers du serveur, et build de l'application React (dans le dossier `dist`)

## Structure des données

> Toutes les données de prix seront stockées en centimes, afin de faciliter les calculs. Elles seront traitées par le back pour les passer de centimes en euros et vice-versa. Le front ne traitera donc que des prix en euros.

### Transmises par l'OCR

L'OCR va traiter l'image du ticket qui lui est transmise. On va ensuite manipuler son retour pour avoir un format de données constant. L'objectif est de fournir au front les données du ticket dans le format suivant (ces données ne seront pas persistées dans la base de données) :

```json
[
  {
    name: "pizza",
    quantity: 2,
    unitPrice: 11.80
  }
]
```

### En base

#### Le ticket

```json
{
  "id": 1,
  "uuid": "575d1f08-9f14-4d15-9870-00e435846640",
  "owner_id": 0,
  "articles_data": [
    {
      "id": 0,
      "name": "pizza",
      "price": 1180,
      "consumers": [1]
    },
    {
      "id": 1,
      "name": "pizza",
      "price": 1180,
      "consumers": [2]
    },
    {
      "id": 2,
      "name": "coca-cola 1.5L",
      "price": 350,
      "consumers": [2, 3]
    }
  ]
}
```

Les données des articles associées à un ticket sont stockées dans la colonne `articles_data` en format JSON. On retrouve ainsi pour chaque ticket les données qui lui sont associées.
Lorsqu'un article est présent en plusieurs quantités sur le ticket, il est répété afin d'avoir un identifiant unique permettant de l'associé à un/des utilisateurs précis. L'exemple ci-dessus présente l'article "pizza" 2 fois, associé à 2 utilisateurs différents.

#### Les articles

```json
    {
      "id": 0,
      "name": "pizza",
      "price": 1180,
      "consumers": [1]
    }
```

Chaque article est stocké dans la clé `articles_data` du ticket associé, en format JSON. La clé `consumers` contient un tableau des id des utilisateurs participant au paiement de l'article.

#### Les utilisateurs

```json
{
  "id": 1,
  "name": "Jean",
  "email": "jean@mail.fr"
}
```

L'email de l'utilisateur est l'identifiant public unique.