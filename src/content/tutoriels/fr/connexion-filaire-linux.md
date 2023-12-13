---
icon: linux
title: Se connecter en filaire avec Linux
category: fr/filaire
---

## Prérequis

Pour pouvoir enregistrer vos appareils sur le réseau MiNET, vous aurez besoin d'ajouter vos adresses MACs à votre compte. Si vous ne savez pas comment les entrer, n'hésitez pas à suivre le tutoriel [Ajouter des appareils à son compte MiNET](/fr/tutoriels/ajouter-des-appareils) qui vous indiquera comment procéder.

## Configurer son PC sous Linux (filaire)

En suivant ce tutoriel, vous verrez comment configurer votre ordinateur sous Linux afin de bénéficier d'une connexion Internet en filaire à MiNET.

### Création d'un nouveau profil de connexion

Pour effectuer la configuration, nous nous aiderons d'un terminal. Une fois ouvert, tapez :
- La commande  nm-connection-editor 
- Dans la fenêtre qui s'ouvre, cliquez sur "Ajouter" et choississez "Ethernet" dans la liste déroulante
- Cliquez sur "Créer"
- Donnez un nom à votre profil de connexion
- Choississez la carte réseau à lier à ce nouveau profil

Une fois cela fait, votre profil de connexion est crée, il ne vous reste plus qu'à le configurer.

### Configuration de l'authentification

Il reste à choisir le type d'authentification. Sur la même fenêtre
- Dans l'onglet "Sécurité 802.1X", cochez la case "Utilisez la sécurité 802.1X pour cette connexion"
- Choississez ensuite "Protected EAP (PEAP) pour l'authentification
- Cochez la case "Aucun certificat de CA n'est requis"
- Enfin, entrez vos identifiants et mots de passe dans les champs "Nom d'utilisateur" et "Mot de passe"
- Vous pouvez alors fermer la fenêtre en cliquant sur "Enregistrer"

Une fois ces étapes faites, il ne reste plus qu'à brancher votre câble réseau, et vous devriez vous connecter automatiquement au réseau filaire MiNET. Remarquez que l'authentification peut prendre quelques secondes. Par ailleurs, un redémarrage du PC peut-être nécessaire.

