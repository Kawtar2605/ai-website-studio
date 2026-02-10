# AI Website Studio – POC MLOps (en cours)

## Pourquoi ce projet existe

Ce projet est un **POC personnel** réalisé dans un objectif d’apprentissage et de montée en compétences en **IA appliquée et MLOps**.

Je viens d’un parcours non technique à l’origine, et ce projet a pour but de montrer :
- ma capacité à structurer un raisonnement IA,
- ma compréhension progressive des pipelines IA,
- et ma manière d’aborder un problème complexe de façon méthodique.

L’objectif n’est pas d’avoir un produit fini, mais un **socle technique cohérent**, compréhensible et améliorable.

---

## Problème que je cherche à résoudre

À partir d’un prompt utilisateur libre, par exemple :

“Je veux un site moderne pour mon restaurant thaï”

Comment peut-on :
- analyser ce texte,
- en extraire des intentions exploitables,
- générer une structure de site cohérente,
- et l’afficher dynamiquement dans une interface ?

Ce projet explore cette question **pas à pas**, sans prétendre à une automatisation parfaite.

---

## Approche choisie

Le projet est volontairement découpé en plusieurs briques simples :

### 1. Entrée utilisateur
- Interface web en Next.js
- Champ texte libre pour décrire un besoin

### 2. Parsing d’intention (logique IA simplifiée)
- Analyse basique du prompt
- Détection de mots-clés (domaine, style, sections)
- Transformation du texte en un objet structuré

### 3. Modèle de données intermédiaire
- Utilisation de structures typées pour représenter l’intention
- Ces modèles servent de lien entre l’IA et l’interface

### 4. Génération de structure
- Création d’un modèle de site à partir de l’intention
- Pages et sections générées de façon déterministe
- Logique volontairement explicable et modulaire

### 5. Rendu front-end
- Rendu React basé uniquement sur les données générées
- Pas de logique métier côté UI
- L’interface est une projection directe du modèle

---

## Ce que ce projet montre réellement

- Une capacité à **décomposer un problème IA**
- Une réflexion orientée **pipeline plutôt que “magie”**
- Une séparation claire entre :
  - parsing,
  - génération,
  - rendu
- Une volonté de comprendre les bases avant d’automatiser davantage

---

## Limites actuelles (assumées)

- Parsing volontairement simple
- Pas encore de LLM réel en production
- Pas de persistance des données
- Pas d’export automatique

Ces limites sont **connues** et font partie de l’apprentissage.

---

## Objectifs à moyen terme

- Intégrer un LLM de manière contrôlée
- Améliorer la qualité du parsing
- Ajouter une persistance
- Étudier l’export de sites générés
- Continuer à structurer le projet comme un vrai pipeline IA

---

## Positionnement

Ce projet n’est pas une démonstration d’expertise,  
mais une **preuve de démarche**, de curiosité et de rigueur.

Il s’inscrit dans une logique de **préparation à un rôle junior MLOps / IA**, avec une attention particulière portée à la structure, la lisibilité et l’évolutivité.
