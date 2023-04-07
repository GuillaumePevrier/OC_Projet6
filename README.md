<a name="readme-top"></a>
# Projet 06 - Créez une application web de location immobilière avec React
_( Ce projet consiste en l'implémentation du front-end d'une application en utilisant le framework React. Le projet comporte plusieurs étapes, de l'initialisation du projet à la mise en place des fonctionnalités de l'application. Les étapes sont détaillées dans le tableau Guide d'étapes clés ci-dessous.)_


## Description

Guide d'étapes clés

Étape 1 : Initialisez le projet (5% de progression)
Avant de démarrer cette étape, assurez-vous d'avoir suivi le cours "Débutez avec React" ainsi que la partie 1 du cours "Créez une application React complète". Une fois cette étape terminée, vous devriez avoir l'application React installée et le repository GitHub initialisé.

Étape 2 : Ajoutez React Router (10% de progression)
Avant de démarrer cette étape, assurez-vous d'avoir initialisé votre application. Une fois cette étape terminée, vous devriez avoir React Router et ses dépendances installés sur votre application.

Étape 3 : Créez le routeur et les différentes pages de l'application (25% de progression)
Avant de démarrer cette étape, assurez-vous d'avoir installé React Router à votre application. Une fois cette étape terminée, le routage de votre application devrait être fonctionnel.

Étape 4 : Créez la page d'accueil (40% de progression)
Avant de démarrer cette étape, assurez-vous que la logique de routage soit fonctionnelle. Une fois cette étape terminée, les composants banner et card devraient être créés, ainsi qu'une liste des propriétés disponibles.

Étape 5 : Créez la page À propos (50% de progression)
Avant de démarrer cette étape, assurez-vous que la logique de routage soit fonctionnelle. Une fois cette étape terminée, le composant Collapse devrait être créé.

Étape 6 : Mettez en page la page de connexion (75% de progression)
Avant de démarrer cette étape, assurez-vous d'avoir créé les différentes pages de l'application. Une fois cette étape terminée, la mise en page de la page de connexion devrait être effectuée.

Étape 7 : Mettez en page la page de validation (90% de progression)
Avant de démarrer cette étape, assurez-vous d'avoir créé la page de connexion. Une fois cette étape terminée, la mise en page de la page de validation devrait être effectuée.

Étape 8 : Intégrez l'API (100% de progression)
Une fois cette étape terminée, vous devriez avoir intégré l'API à votre application.

Comment utiliser ce projet

Pour utiliser ce projet, vous pouvez cloner le repository GitHub et suivre les différentes étapes du Guide d'étapes clés. Les ressources nécessaires pour chaque étape sont également fournies dans le guide. Vous pouvez également vous référer aux commentaires et aux exemples de code pour vous aider dans votre implémentation.

## Lien utiles:



## AIDE-MÉMOIRE GITHUB GIT

_Git est le sytème de gestion de version décentralisé open source qui facilite les activités GitHub sur votre ordinateur. Cet aide-mémoire permet un accès rapide aux instructions des commandes Git les plus utilisées._
<details>
	<summary>Commandes utiles GIT</summary>
	
<details>
	<summary>1. CRÉER DES DÉPÔTS</summary>
	

* Démarrer un nouveau dépôt ou en obtenir un depuis une URL existante

   ```sh
	git init [nom-du-projet]
   ```
	Crée un dépôt local à partir du nom spécifié
   ```sh
   git clone [url]
   ```
   Télécharge un projet et tout son historique de versions
</details>
<details>
	<summary>2. EFFECTUER DES CHANGEMENTS</summary>

* Consulter les modifications et effectuer une opération de commit

   ```sh
   git status
   ```
   Liste tous les nouveaux fichiers et les fichiers modifiés à commiter
   ```sh 
   git diff
   ```
	Montre les modifications de fichier qui ne sont pas encore indexées
   ```sh
	git add [fichier]
   ```
	Ajoute un instantané du fichier, en préparation pour le suivi de version
   ```sh
	git diff --staged
   ```
	Montre les différences de fichier entre la version indexée et la dernière version
   ``` sh
	git reset [fichier]
   ```
	Enlève le fichier de l'index, mais conserve son contenu
   ``` sh
	git commit -m "[message descriptif]"
   ```
	Enregistre des instantanés de fichiers de façon permanente dans l'historique des versions
</details>
<details>
	<summary>3. GROUPER DES CHANGEMENTS</summary>	  

* Nommer une série de commits et combiner les résultats de travaux terminés

   ```sh 
   git branch
   ```
   Liste toutes les branches locales dans le dépôt courant
	   
   ```sh
   git branch [nom-de-branche]
   ```
   Crée une nouvelle branche
	  
   ```sh 
   git checkout [nom-de-branche]
   ```
   Bascule sur la branche spécifiée et met à jour le répertoire de travail
		
   ```sh
   git merge [nom-de-branche]
   ```
   Combine dans la branche courante l'historique de la branche spécifiée
	
   ```sh
   git branch -d [nom-de-branche]
   ```
   Supprime la branche spécifiée
</details>
</details>

Scénario

Kasa vous recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.
L'occasion parfaite pour vous d'ajouter une belle référence à votre portfolio de freelance !
Image d'une chambre d'hôtel avec le logo de Kasa.
Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année !
Un point est prévu avec la CTO plus tard dans la semaine, mais pour que vous puissiez vous familiariser avec les enjeux de votre mission, vous trouvez le récapitulatif suivant dans votre boîte mail :
 
Objet : Brief refonte site Kasa
De : Laura
À : Moi
Hello,
Bienvenue pour ton premier jour !
On est vraiment ravis de te compter parmi nous !
Tu vas pouvoir nous aider à donner vie à un chantier sur lequel on travaille depuis plusieurs mois.
Je préfère te mettre par écrit quelques éléments de contexte qui t'aideront à te projeter dans ta mission avant notre point de jeudi.
 
Ton objectif : Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !) et toutes les infos que je te donne ci-dessous. Et ce avec un code de qualité ! 
Back-end / data : Le recrutement de la personne en charge du back-end n'est pas terminé et va prendre plus de temps que prévu. Du coup, il va falloir que tu fasses sans pour le moment. Je t'ai extrait les 20 dernières annonces de logements dans ce fichier JSON pour que tu puisses construire le Front qui correspond.
Contraintes techniques : Tu trouveras les coding guidelines de Kasa ici. 
Voilà, j'espère que ce petit récapitulatif t'aura donné suffisamment de pistes pour aborder sereinement tes premiers jours chez nous.
Très bonne journée à toi !
Laura
 
Plus tard dans la journée, vous recevez un e-mail de Paul, le designer, qui vous donne plus d’informations sur le design et les fonctionnalités du site. 
 
Objet : Fonctionnalité et design
De : Paul
À : Moi
Salut,
Bienvenue parmi nous ! Laura m’a dit de te briefer sur le design de la nouvelle version du site, alors voici les infos clés.
Design
Voici les maquettes sur Figma pour le design d’interface. J’ai l’habitude de travailler avec la logique de composants sur Figma ; Sandra m’a dit que ça te faciliterait le travail sur React. Tu trouveras toutes les ressources dont tu as besoin directement dans la maquette (logo, icônes pour les composants, etc.). Pour cela, il suffit de cliquer sur la ressource souhaitée et de faire "Exporter" au format voulu.
 
Contraintes fonctionnelles
Quelques précisions sur les fonctionnalités du site :
Pour le défilement des photos dans la galerie (composant Gallery) :
Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 
Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 
S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. 
Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.
 
Bon courage pour le développement, j’ai hâte de voir ce que ça va donner !
Paul
Ça y est, vous avez toutes les informations nécessaires, vous pouvez démarrer votre développement !
Pour rappel, afin de vous aider à réaliser ce projet, vous pouvez consulter ce guide d’étapes à suivre, qui contient des recommandations et des ressources pour organiser votre travail.

Livrables
Un fichier au format TXT ou PDF comprenant le lien vers votre code sur GitHub contenant l’ensemble du projet, à savoir :
le code React de l’application ;
le code React Router pour les routes dans un fichier dédié.
Pour faciliter votre passage devant le jury, déposez sur la plateforme, dans un dossier ZIP nommé “Titre_du_projet_nom_prénom”, tous les livrables du projet comme suit : Nom_Prénom_n° du livrable_nom du livrable__date de démarrage du projet. Cela donnera :  
Nom_Prénom_1_lien_repo_github_mmaaaa
Par exemple, le premier livrable peut être nommé comme suit : Dupont_Jean_1_lien_repo_github_012022
 
Soutenance
Durant la présentation orale, l’évaluateur interprétera le rôle du CTO. La soutenance est structurée de la manière suivante :
Présentation des livrables (15 minutes) 
Présentation des différentes pages, avec la navigation entre elles, et les interactions avec tous les éléments interactifs. 
Parcours des fichiers de code avec le mentor. Mise en avant des différents composants React. 
Discussion (10 minutes) 
Le mentor, qui joue le rôle du CTO, posera des questions sur la méthodologie adoptée et sur les livrables.
Le mentor challengera au maximum les décisions techniques que vous avez prises ; il faudra donc que vous soyez capable de les justifier, et de défendre votre travail.
Débriefing (5 minutes)
À la fin de la soutenance, l'évaluateur arrêtera de jouer le rôle du CTO pour vous permettre de débriefer ensemble.

Auteurs

Ce projet a été réalisé par [Guillaume PEVRIER].
	
<p align="right">(<a href="#readme-top">Retour haut de page</a>)</p>

