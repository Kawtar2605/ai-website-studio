# AI Website Studio – Architecture v0.1

## Objectif du projet
Ce projet a pour objectif de créer un outil permettant de générer des sites web simples
à partir d’une description écrite par l’utilisateur.

L’utilisateur décrit son site, et l’application affiche une version du site en direct.

## Fonctionnement général
- L’interface est développée avec Next.js
- L’utilisateur écrit une description du site
- Cette description est transformée en une structure organisée
- Le site est affiché dynamiquement à l’écran

## État actuel du projet
- Interface fonctionnelle
- Navigation de base
- Affichage dynamique du contenu
- Version figée v0.1

## Prochaine étape
- Séparer la logique de génération (agent IA) du site web
- Préparer l’intégration d’un agent IA externe
- Introduction d’un modèle de site intermédiaire (JSON) servant d’interface entre le frontend et un futur agent IA.

## Modèle de rendu par sections (SectionRenderer)

Le site est basé sur un modèle de sections typées.

Chaque page contient une liste de sections décrites en JSON.
Chaque section possède :
- un `type` (hero, text, image, etc.)
- un `content` adapté à ce type

Le composant `SectionRenderer` reçoit une section et décide dynamiquement
comment l’afficher selon son type.

Cette approche permet :
- d’ajouter de nouveaux types de sections sans modifier la page principale
- de séparer le contenu du rendu
- de préparer l’intégration d’un agent IA générant ou modifiant le JSON

Types de sections actuels :
- HeroSection (titre + sous-titre)
- TextSection (contenu textuel)
- ImageSection (image + description)

Le frontend devient ainsi un moteur de rendu générique piloté par un modèle de site.
