---
icon: apple
title: Connecter un MAC en filaire au réseau MiNET
category: fr/filaire
---

## Prérequis

Pour pouvoir enregistrer vos appareils sur le réseau MiNET, vous aurez besoin d'ajouter vos adresses MACs à votre compte. Si vous ne savez pas comment les entrer, n'hésitez pas à suivre le tutoriel [Ajouter des appareils à son compte MiNET](/tutoriels/ajouter-des-appareils) qui vous indiquera comment procéder.

## Connexion au réseau filaire

- Branchez votre câble
- Au bout de quelques secondes, une fenêtre vous demandant vos identifiants s'ouvre. Renseignez donc vos identifiants MiNET
- Cliquez sur “Continuer” lorsque la fenêtre qui vous demande de vérifier le certificat s'ouvre
- Entrez ensuite le mot de passe de votre Mac (et non MiNET !) dans la fenêtre suivante
- Vous êtes connecté ! L'accès à Internet devrait se faire dans les secondes qui suivent.

Si vous ne parvenez pas à vous authentifier, installez manuellement ce certificat :

- Téléchargez le fichier suivant : minet_mac.mobileconfig
- Double-cliquez sur le fichier une fois téléchargé, et autorisez l'installation
- À un moment donné, vous aurez besoin d'entrer vos identifiants MiNET et le mot de passe de votre Mac
- Une fenêtre s'ouvre avec les détails du profil 802.1x ainsi créé, vous pouvez la fermer
- Dans les préférences réseau, réglages avancés, vous pouvez désormais choisir le profil 802.1x créé et vous connecter au réseau MiNET !
