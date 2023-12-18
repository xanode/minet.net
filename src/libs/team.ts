import type { ImageMetadata } from "astro";
import type { ui, defaultLang } from "@i18n/ui";

import RespoWifiReference from "@assets/equipe/tim.png";
import RespoFormations1Reference from "@assets/equipe/val.png";
import RespoFormations2Reference from "@assets/equipe/louis.png";
import RespoWebReference from "@assets/equipe/thomas.png";
import TresorierReference from "@assets/equipe/baptiste.png";
import VicePresident1Reference from "@assets/equipe/tom.png";
import RespoInventaireReference from "@assets/equipe/mathis.png";
import SecretaireReference from "@assets/equipe/esteban.png";
import RespoClubsReference from "@assets/equipe/chabane.png";
import RespoCommunication1Reference from "@assets/equipe/raph.png";
import PresidentReference from "@assets/equipe/nicolasp.png";
import RespoCommunication2Reference from "@assets/equipe/juliette.png";
import VicePresident2Reference from "@assets/equipe/nicolasvp.png";
import RespoREReference from "@assets/equipe/yasmine.png";


interface Collaborator {
    name: string;
    pseudo: string;
    role?: string;
}

interface Member {
    name: string;
    pseudo: string;
    role: keyof typeof ui[typeof defaultLang];
    hasResigned?: boolean;
    image?: ImageMetadata;
}

interface Team {
    mandate: string;
    members: Member[];
    collaborators?: Collaborator[];
}

export const activeTeam: Team = {
    mandate: "2023-2024",
    members: [
        {name: "Yasmine Aluch", pseudo: "samayass", role: 'team.role.corporate', hasResigned: true, image: RespoREReference},
        {name: "Chabane Petit", pseudo: "lowengeist", role: 'team.role.clubs', image: RespoClubsReference},
        {name: "Raphaël Bachelier", pseudo: "ptitegame", role: 'team.role.communication', image: RespoCommunication1Reference},
        {name: "Thomas Robert", pseudo: "toyohr", role: 'team.role.web', image: RespoWebReference},
        {name: "Valentin Lantigny", pseudo: "valt", role: 'team.role.formations', image: RespoFormations1Reference},
        {name: "Esteban Dectot", pseudo: "greemty", role: 'team.role.secretary', image: SecretaireReference},
        {name: "Tom Burellier", pseudo: "balmine", role: 'team.role.vp', image: VicePresident1Reference},
        {name: "Nicolas Rocq", pseudo: "nishogi", role: 'team.role.president', image: PresidentReference},
        {name: "Nicolas Renout", pseudo: "naincapable", role: 'team.role.vp', image: VicePresident2Reference},
        {name: "Baptiste Legros", pseudo: "direshaw", role: 'team.role.treasurer', image: TresorierReference},
        {name: "Louis Delyon", pseudo: "rustace", role: 'team.role.formations', image: RespoFormations2Reference},
        {name: "Timothée Mathubert", pseudo: "xhelozs", role: 'team.role.wifi', image: RespoWifiReference},
        {name: "Juliette Bourdiau", pseudo: "jouliet", role: 'team.role.communication', image: RespoCommunication2Reference},
        {name: "Mathis Williot", pseudo: "jflyxx", role: 'team.role.inventory', image: RespoInventaireReference},
    ]
}

export const teams: Team[] = [
    {
        mandate: "2022-2023",
        members: [
            {name: "Nathan Stchepinsky", pseudo: "seaweedbrain", role: 'team.role.president'},
            {name: "Clément Lucas", pseudo: "sulray", role: 'team.role.vp'},
            {name: "Siffrein Sigy", pseudo: "wobarron", role: 'team.role.vp'},
            {name: "Bilal Boumeslout", pseudo: "linegann", role: 'team.role.treasurer'},
            {name: "Gatien Roujanski", pseudo: "fauconk", role: 'team.role.secretary'},
            {name: "Bence Kolonics", pseudo: "placeholder", role: 'team.role.formations'},
            {name: "Benoit Marzelleau", pseudo: "xanode", role: 'team.role.web&formations'},
            {name: "Alexandre Humeau", pseudo: "didier", role: 'team.role.wifi'},
            {name: "Orlane Donias", pseudo: "kamiro", role: 'team.role.communication'},
            {name: "Inès Kacer", pseudo: "nesi", role: 'team.role.communication'},
            {name: "Hector Fétis", pseudo: "smyler", role: 'team.role.clubs'},
            {name: "Yassine Boussafir", pseudo: "bouyass", role: 'team.role.permanences'},
            {name: "Thomas Plazziac", pseudo: "fabulo", role: 'team.role.inventory'},
        ],
    },
    {
        mandate: "2021-2022",
        members: [
            {name: "Jules Gonzales", pseudo: "seberus", role: 'team.role.president'},
            {name: "Éloïse Bonnet", pseudo: "lovali", role: 'team.role.vp'},
            {name: "Hamza Benfkira", pseudo: "lionofinterest", role: 'team.role.vp'},
            {name: "Héloïse Thu Ping One", pseudo: "heloise", role: 'team.role.treasurer'},
            {name: "Amar Drame", pseudo: "adn8", role: 'team.role.vt'},
            {name: "Kenza Benjelloun", pseudo: "growser", role: 'team.role.secretary'},
            {name: "Viktor Colas", pseudo: "vaktas", role: 'team.role.web&formations'},
            {name: "Paul Vancauwenberghe", pseudo: "kl0wn", role: 'team.role.formations&communication'},
            {name: "Zohra Bekhti", pseudo: "zohrabekhti", role: 'team.role.communication'},
            {name: "Kanamé Murakami", pseudo: "free_hugs", role: 'team.role.clubs'},
            {name: "Léonard Fourneret", pseudo: "pasta", role: 'team.role.corporate'},
            {name: "Martin Spiering", pseudo: "typhlos", role: 'team.role.hardware'},
            {name: "Pierre Cornette", pseudo: "flying_potato", role: 'team.role.inventory'},
        ],
        collaborators: [
            {name: "Lucie", pseudo: "Közel"},
            {name: "Mévéna Boué", pseudo: "ka-ribou"},
        ],
    },
    {
        mandate: "2020-2021",
        members: [
            {name: "Clément Parssegny", pseudo: "cleplatypint", role: 'team.role.president'},
            {name: "D. C.", pseudo: "za", role: 'team.role.vp'},
            {name: "Gauthier Carpentier", pseudo: "nierquick", role: 'team.role.vp'},
            {name: "Anna-Rose Lescure", pseudo: "kapebm", role: 'team.role.treasurer'},
            {name: "Yasmine Mazouz", pseudo: "enimsay", role: 'team.role.vt'},
            {name: "Mohamed Chamrouk", pseudo: "snow", role: 'team.role.communication'},
            {name: "Othman Mhaouty", pseudo: "bjorno", role: 'team.role.formations'},
            {name: "Valentin Paolicelli", pseudo: "omeega1", role: 'team.role.clubs'},
            {name: "Aurélien Chomon", pseudo: "financier", role: 'team.role.corporate'},
        ],
        collaborators: [
            {name: "Gaëtan Gianquintieri", pseudo: ""},
            {name :"Rémi Billy", pseudo: "rbilly"},
        ]
    },
    {
        mandate: "2019-2020",
        members: [
            {name: "François Horta", pseudo: "frazew", role: 'team.role.president'},
            {name: "Johan Hubau-Honoré", pseudo: "heisenberg", role: 'team.role.vp'},
            {name: "Gabriel Prévault", pseudo: "gabery", role: 'team.role.vp'},
            {name: "Xavier-Henri Monier", pseudo: "archonte", role: 'team.role.treasurer'},
            {name: "Julie Chevrier", pseudo: "littlewillow", role: 'team.role.secretary'},
            {name: "Alexandre Breux", pseudo: "diabord", role: 'team.role.web'},
            {name: "Constance Chou", pseudo: "rico", role: 'team.role.communication'},
            {name: "Jean-Baptiste Mouret", pseudo: "hydroxyl", role: 'team.role.formations', hasResigned: true},
        ],
    },
    {
        mandate: "2018-2019",
        members: [
            {name: "Emmanuel Allaire", pseudo: "abracastoral", role: 'team.role.president'},
            {name: "Clément Taverne", pseudo: "simtrami", role: 'team.role.vp'},
            {name: "Valentin Penciolelli", pseudo: "penpen", role: 'team.role.treasurer'},
            {name: "Etienne Lamouret", pseudo: "etiennewan", role: 'team.role.secretary'},
            {name: "Alice Rebeyrol", pseudo: "shatoon", role: 'team.role.communication'},
            {name: "Olivier Dulcy", pseudo: "moog", role: 'team.role.formations'},
            {name: "Pierrick Gorisse", pseudo: "teagrain", role: 'team.role.security'},
            {name: "Adrien Floriant", pseudo: "mad", role: 'team.role.software', hasResigned: true},
        ],
    },
    {
        mandate: "2017-2018",
        members: [
            {name: "Romain Cherré", pseudo: "varens", role: 'team.role.president'},
            {name: "Nicolas Bonnet", pseudo: "InsolentBacon", role: 'team.role.vp'},
            {name: "Pierre Bidault", pseudo: "debiantarte", role: 'team.role.treasurer'},
            {name: "Yohann Pipereau", pseudo: "sowarks", role: 'team.role.secretary'},
            {name: "Erwan Goareguer", pseudo: "backpack", role: 'team.role.web'},
            {name: "Tahar Boubeker", pseudo: "conspiracy", role: 'team.role.communication'},
            {name: "Stevan Coroller", pseudo: "occuria", role: 'team.role.security'},
            {name: "Shems Bourass", pseudo: "donk", role: 'team.role.log'},
            {name: "Pierrick Pamart", pseudo: "kwaky", role: 'team.role.1A'},
        ],
    },
    {
        mandate: "2016-2017",
        members: [
            {name: "Thomas Coutelou", pseudo: "thunder", role: 'team.role.president'},
            {name: "Constantin Vurli", pseudo: "theagentsmith", role: 'team.role.vp'},
            {name: "Guillaume Gonthier", pseudo: "undeb", role: 'team.role.vp'},
            {name: "Aurélien Bettini", pseudo: "gerox", role: 'team.role.treasurer'},
            {name: "Mariem Ouechtati", pseudo: "wish", role: 'team.role.secretary'},
            {name: "Adrien Cohen", pseudo: "pandouille", role: 'team.role.web'},
            {name: "Charles Caporali", pseudo: "capolrik", role: 'team.role.communication'},
            {name: "Alexandre Lefort", pseudo: "gingerbread", role: 'team.role.formations'},
            {name: "Antoine Tadros", pseudo: "ramses", role: 'team.role.vt'},
            {name: "Hugo Rodriguez", pseudo: "mfidel", role: 'team.role.network'},
            {name: "Lucas Sirvent", pseudo: "et_lux_fuit", role: 'team.role.corporate'},
            {name: "Florian Martin", pseudo: "manwefm", role: 'team.role.security'},
            {name: "Ignacio Tamayo", pseudo: "tamayo_j", role: 'team.role.vieux_sage_du_reseau'},
            {name: "Benjamin Deyrolles", pseudo: "sinoy", role: 'team.role.community'},
            {name: "Eve Refeyton", pseudo: "eve", role: 'team.role.internal'},
        ],
        collaborators: [
            {name: "Jeremy Venin", pseudo: "arceus"},
            {name: "Grégoire Menguy", pseudo: "acous"},
        ]
    },
    {
        mandate: "2015-2016",
        members: [
            {name: "Thibault Sautereau", pseudo: "thithib", role: 'team.role.president'},
            {name: "Vincent Gourvennec", pseudo: "vzh", role: 'team.role.vp'},
            {name: "Antoine Bernard", pseudo: "spiderweak", role: 'team.role.vp'},
            {name: "Adrien Wion", pseudo: "aharion", role: 'team.role.treasurer'},
            {name: "Stéphane Kombo", pseudo: "stfk", role: 'team.role.secretary'},
            {name: "Théodore Riera", pseudo: "warsang", role: 'team.role.web'},
            {name: "Sondra Strimbei", pseudo: "sasayake", role: 'team.role.communication'},
            {name: "Yassine Tioual", pseudo: "nisay", role: 'team.role.formations'},
            {name: "Malcolm Bourdon", pseudo: "skinndhou", role: 'team.role.vt'},
            {name: "Antoine Morrier", pseudo: "qnope", role: 'team.role.software'},
            {name: "Ambre Montfort", pseudo: "amber", role: 'team.role.corporate'},
            {name: "Benoit Bazard", pseudo: "ginkgo", role: 'team.role.hardware'},
        ],
        collaborators: [
            {name: "Arthur Lefebvre", pseudo: "artlef"},
            {name: "Erwan Guyomarc'h", pseudo: "pandawan"},
        ],
    },
    {
        mandate: "2014-2015",
        members: [
            {name: "Anasse Hassala", pseudo: "marlow", role: 'team.role.president'},
            {name: "Paul Jarleton", pseudo: "sarlam", role: 'team.role.vp', hasResigned: true},
            {name: "Andréa Mornet-Martinvalet", pseudo: "badgohan", role: 'team.role.treasurer'},
            {name: "Pauline Remontet", pseudo: "draconis", role: 'team.role.secretary'},
            {name: "Youness Skalli", pseudo: "yon", role: 'team.role.web'},
            {name: "Nicolas Merle", pseudo: "antonov", role: 'team.role.communication'},
            {name: "Kevin Cazal", pseudo: "no_pseudo", role: 'team.role.formations'},
            {name: "Jean-Edouard Reuglewicz", pseudo: "bichon", role: 'team.role.hardware'},
            {name: "Marie-Pierre Salvi", pseudo: "twili", role: 'team.role.software'},
            {name: "Myriam El-Houdini-Dehaudt", pseudo: "timka", role: 'team.role.conference'},
            {name: "Noé Marius", pseudo: "khalaan", role: 'team.role.monitoring'},
        ],
    },
    {
        mandate: "2013-2014",
        members: [
            {name: "Benoit Tellier", pseudo: "benwa", role: 'team.role.president'},
            {name: "Emmanuel Chaboud", pseudo: "amadeus", role: 'team.role.vp'},
            {name: "Meriam Lachkar", pseudo: "lachkar", role: 'team.role.treasurer'},
            {name: "Pernelle Mensah", pseudo: "pernelle", role: 'team.role.secretary'},
            {name: "Kelvin Moutet", pseudo: "kelvin", role: 'team.role.web'},
            {name: "Fabien Vandeschrick", pseudo: "vandesch", role: 'team.role.communication'},
            {name: "Emmanuel Blonkowski", pseudo: "", role: 'team.role.monitoring'},
            {name: "Christophe Chhiev", pseudo: "karakoufou", role: 'team.role.hardware'},
            {name: "Abdelaziz Ben Adada", pseudo: "", role: 'team.role.wifi'},
        ],
    },
    {
        mandate: "2012-2013",
        members: [
            {name: "Anthony Verez", pseudo: "netantho", role: 'team.role.president'},
            {name: "Thibauld Ingargiola", pseudo: "tsi", role: 'team.role.vp'},
            {name: "François Monniot", pseudo: "", role: 'team.role.treasurer'},
            {name: "Ghaleb Karam", pseudo: "atrax", role: 'team.role.secretary'},
            {name: "Alexis Mousset", pseudo: "", role: 'team.role.formations'},
            {name: "Maël Kimmerlin", pseudo: "", role: 'team.role.hardware'},
            {name: "Guilhem Tiennot", pseudo: "", role: 'team.role.wifi'},
            {name: "Emilie Vauthrot", pseudo: "syew", role: 'team.role.projects'},
            {name: "Guillaume Hugues", pseudo: "", role: 'team.role.events'},
        ],
    },{
        mandate: "2011-2012",
        members: [
            {name: "Stéphanie Ouillon", pseudo: "stephanie", role: 'team.role.president'},
            {name: "Nicolas Carlo", pseudo: "espeon", role: 'team.role.vp'},
            {name: "Ariane Richer", pseudo: "ariane", role: 'team.role.treasurer'},
            {name: "Vincent Jacquot", pseudo: "stern", role: 'team.role.secretary'},
            {name: "Vincent Pesenti", pseudo: "jaden", role: 'team.role.projects'},
            {name: "Yolaine Raux", pseudo: "layian", role: 'team.role.formations'},
            {name: "Philippe Tillet", pseudo: "ragnar", role: 'team.role.applications'},
            {name: "Fabien Bernard", pseudo: "fab0102", role: 'team.role.benefactor'},
        ],
    },
    {
        mandate: "2010-2011",
        members: [
            {name: "Guillaume Rose", pseudo: "MrFreeze", role: 'team.role.president'},
            {name: "Medhi Sebar", pseudo: "ever1", role: 'team.role.vp'},
            {name: "Emilien Kofman", pseudo: "emi", role: 'team.role.treasurer'},
            {name: "Clément Bethuys", pseudo: "bethclem", role: 'team.role.secretary'},
            {name: "Yolaine Raux", pseudo: "", role: 'team.role.formations'},
            {name: "Guillaume Demaison", pseudo: "XtalSi", role: 'team.role.software'},
            {name: "Mathieu Cassard", pseudo: "cassou", role: 'team.role.projects'},
        ],
        collaborators: [
            {name: "Jean-Baptiste Habourdin", pseudo: "grabazu", role: "Manager"},
        ],
    },
    {
        mandate: "2009-2010",
        members: [
            {name: "Laurent Yin", pseudo: "laurent", role: 'team.role.president'},
            {name: "François-Xavier Lair", pseudo: "FiX", role: 'team.role.vp'},
            {name: "Mouhcine", pseudo: "mouhcine", role: 'team.role.treasurer'},
            {name: "Jérémy Cheynet", pseudo: "jeremy", role: 'team.role.secretary'},
            {name: "Siman", pseudo: "siman", role: 'team.role.web'},
            {name: "Florent", pseudo: "", role: 'team.role.communication'},
        ],
        collaborators: [
            {name: "Michel Dong", pseudo: "raknor", role: "Responsable Technique"},
            {name: "Dhia Moakhar", pseudo: "dhia", role: "Responsable TV"},
            {name: "Mathieu Frappier", pseudo: "supermatt", role: "VP PM"},
        ],
    },
    {
        mandate: "2008-2009",
        members: [
            {name: "Aymeric Chaïb", pseudo: "aymeric", role: 'team.role.president'},
            {name: "Sarafou Baldé", pseudo: "sarafou", role: 'team.role.vp'},
            {name: "Mathieu Massol", pseudo: "mathieu", role: 'team.role.treasurer'},
            {name: "Valérie Branche", pseudo: "valerie", role: 'team.role.secretary'},
            {name: "Yann Sionneau", pseudo: "yann", role: 'team.role.web'},
            {name: "Victoire Chambry", pseudo: "victoire", role: 'team.role.communication'},
            {name: "Florian Duraffourg", pseudo: "duraffourg", role: 'team.role.grand_architecte'},
        ],
    },
    {
        mandate: "2007-2008",
        members: [
            {name: "Christophe Stein", pseudo: "rezman", role: 'team.role.president'},
            {name: "Arnaud Le Mauff", pseudo: "arnaudlm", role: 'team.role.vp'},
            {name: "Thomas Kersaho Audinet", pseudo: "tom", role: 'team.role.treasurer'},
            {name: "Fakher Yahyaoui", pseudo: "fakher", role: 'team.role.secretary'},
            {name: "Bassam Ben Hammouda", pseudo: "bass", role: 'team.role.web'},
            {name: "Victoire Chambry", pseudo: "", role: 'team.role.communication'},
        ],
    },
    {
        mandate: "2006-2007",
        members: [
            {name: "Florian Fainelli", pseudo: "florian", role: 'team.role.president'},
            {name: "Sébastien Hugel", pseudo: "seb", role: 'team.role.vp'},
            {name: "Jeremy Harrison", pseudo: "sonaris", role: 'team.role.treasurer'},
            {name: "Christelle Agnus", pseudo: "crikette", role: 'team.role.secretary'},
            {name: "Idris Sersoub", pseudo: "idris", role: 'team.role.web'},
        ],
    },
    {
        mandate: "2005-2006",
        members: [
            {name: "Jean-Guilhem Nousse", pseudo: "genious", role: 'team.role.president'},
            {name: "Lionel Molinier", pseudo: "x3n", role: 'team.role.vp'},
            {name: "Marc Leurent", pseudo: "Lftsy", role: 'team.role.treasurer'},
            {name: "Sebastien Pauset", pseudo: "moebius", role: 'team.role.secretary'},
            {name: "Olivier Braun", pseudo: "olivier", role: 'team.role.web'},
        ],
    },
    {
        mandate: "2004-2005",
        members: [
            {name: "Khalil Ghorbal", pseudo: "Exzo", role: 'team.role.president'},
            {name: "Mathieu Gombault", pseudo: "qwerty", role: 'team.role.vp'},
            {name: "Youssef Bouslikhane", pseudo: "youssef", role: 'team.role.treasurer'},
            {name: "Carine Joubert", pseudo: "cajou", role: 'team.role.secretary'},
            {name: "Jean-Francois Boeuf", pseudo: "jfb", role: 'team.role.web'},
        ],
        collaborators: [
            {name: "Amandine Dubillon", pseudo: "mady"},
            {name: "Matthieu Kraan", pseudo: "maat"},
            {name: "Aline Dalbiez", pseudo: "mystic", role: "Prez' SadINT"},
            {name: "Florent Thiery", pseudo: "Ddwarf"},
            {name: "Nicolas Rudelle", pseudo: "Nÿko"},
        ],
    },
    {
        mandate: "2003-2004",
        members: [
            {name: "Arnaud Janvier", pseudo: "alpha", role: 'team.role.president'},
            {name: "Sylvain Pomey", pseudo: "FenX", role: 'team.role.vp'},
            {name: "Jean-Didier Kahlig", pseudo: "crash", role: 'team.role.treasurer'},
            {name: "Marie Camier", pseudo: "marie", role: 'team.role.secretary'},
            {name: "Fabien Gomez", pseudo: "acathla", role: 'team.role.web'},
        ],
        collaborators: [
            {name: "Cristophe Gondouin", pseudo: "cricri"},
            {name: "Fabrice Saya-Gasnier", pseudo: "chanito"},
            {name: "Cristophe Eyquem", pseudo: "clarkwan"},
            {name: "Yannick Thirion", pseudo: "krogoth"},
            {name: "Guillaume Peigne", pseudo: "yaum"},
        ],
    },
    {
        mandate: "2002-2003",
        members: [
            {name: "Florent Mathé", pseudo: "Yod", role: 'team.role.president'},
            {name: "Jérémy Kuhn", pseudo: "Zeratul", role: 'team.role.vp'},
            {name: "Lise Pesqueux", pseudo: "Miniliz", role: 'team.role.treasurer'},
            {name: "Marie Porot", pseudo: "Mary", role: 'team.role.secretary'},
            {name: "Benjamin Leroux", pseudo: "Ben", role: 'team.role.web'},
        ],
        collaborators: [
            {name: "Mohamed Ghalayini", pseudo: "", role: "Connexions & Admin Réseau"},
            {name: "Cédric L'Ollivier", pseudo: "Majax", role: "Responsable Sadint"},
            {name: "Thomas Fourdin", pseudo: "Thom", role: "Un peu de tout"},
            {name: "François Délépine", pseudo: "F", role: "IRC & saxotel"},
        ],
    },
    {
        mandate: "2001-2002",
        members: [
            {name: "Yorgos Trachanas", pseudo: "DrYorgos", role: 'team.role.president'},
            {name: "Eric Leclerc", pseudo: "Mantis", role: 'team.role.vp'},
            {name: "Mathieu Hemery", pseudo: "Knife", role: 'team.role.treasurer'},
            {name: "Mathilde Barbanchon", pseudo: "Mathilde", role: 'team.role.secretary'},
            {name: "Pierre Gueguin", pseudo: "Pierre", role: 'team.role.web'},
        ],
        collaborators: [
            {name: "Julien Wajsberg", pseudo: "Mantis", role: "Admin Réseau"},
            {name: "Nicolas Plessis", pseudo: "Nico", role: "Connexions & Admin Réseau"},
            {name: "Thomas Bernard", pseudo: "nanard", role: "Réseau, IRC, ..."},
            {name: "Bertrand Ait Touati", pseudo: "BAT", role: "Responsable Mac & Web"},
            {name: "Frederic Dieu", pseudo: "Gott", role: "Relations Adhérents (Réseau, Problèmes, ...)"},
            {name: "Sylvain Surmonne", pseudo: "Belgaryon", role: "IRC, Relations Entreprises"},
            {name: "Sophie Papajak", pseudo: "Lyb'", role: "Collaboratrice Web et Communication"},
            {name: "Guilhem Ribart", pseudo: "Vlemquov", role: "Jeux"},
            {name: "Judikaëla Auffredou", pseudo: "Judikalea", role: "Vice-Secrétaire"},
        ],
    },
    {
        mandate: "2000-2001",
        members: [
            {name: "David Oger", pseudo: "Likan", role: 'team.role.president'},
            {name: "Antoine Kah", pseudo: "Zahn", role: 'team.role.vp'},
            {name: "Amaury Thisse", pseudo: "Mo", role: 'team.role.treasurer'},
            {name: "Stéphanie Couston", pseudo: "Doreamon", role: 'team.role.secretary'},
            {name: "Guillaume Dauron", pseudo: "Gui", role: 'team.role.web'},
        ],
        collaborators: [
            {name: "Pierre C.", pseudo: "Skid", role: "Admin Réseau"},
            {name: "Dominique Perlat", pseudo: "Lapinot", role: "Web"},
            {name: "Olivier Printemps", pseudo: "O_Spring", role: "Réseau & Web"},
            {name: "Arnauld Le Carbonnier de Morsangliere Qui Tue", pseudo: "Bobock", role: "Réseau"},
            {name: "Emmanuel Courreges", pseudo: "Maikeul", role: "Connexions"},
            {name: "Laurent Cottereau", pseudo: "Clark", role: "Responsable Mac"},
        ],
    },
    {
        mandate: "1999-2000",
        members: [
            {name: "Benoît Deckmyn", pseudo: "Bendeck", role: 'team.role.president'},
            {name: "Benoît Besset", pseudo: "Masterben", role: 'team.role.vp'},
            {name: "Xavier Décombe", pseudo: "Xav", role: 'team.role.treasurer'},
            {name: "Emmanuel Blondel", pseudo: "Scrib", role: 'team.role.secretary'},
            {name: "Cédric Ulmer", pseudo: "Bloubi", role: 'team.role.web'},
        ],
        collaborators: [
            {name: "Elodie Sanchez", pseudo: "Diloé", role: "Vice-Trésorier"},
            {name: "François Bouju", pseudo: "Sved", role: "Web"},
            {name: "Laurent Bernaille", pseudo: "Tabootoi", role: "Sous-fifre"},
            {name: "Régis Leng", pseudo: "Red", role: "Connexions"},
            {name: "Olivier Friedman", pseudo: "Milton", role: "Mac"},
            {name: "Nicolas Frontin", pseudo: "Bernie", role: "Réseau"},
        ],
    },
    {
        mandate: "1998-1999",
        members: [
            {name: "Loïc Bernable", pseudo: "Leto", role: 'team.role.president'},
            {name: "Jean-Jacques Puig", pseudo: "JJ", role: 'team.role.vp'},
            {name: "Emmanuel Araman", pseudo: "Manu", role: 'team.role.treasurer'},
            {name: "Stéphane Lecoanet", pseudo: "Maciste", role: 'team.role.secretary'},
        ],
        collaborators: [
            {name: "Matthieu Speder", pseudo: "Spider", role: "Mac"},
            {name: "Mathieu Millet", pseudo: "Htam", role: "Alpha-NT"},
            {name: "Julien Serre", pseudo: "Frané", role: "Connect-Men"},
            {name: "Agnes Garron", pseudo: "Agnes", role: "Fille"},
        ],
    },
    {
        mandate: "1997-1998",
        members: [
            {name: "Steeve Devergne", pseudo: "Steeve", role: 'team.role.president'},
            {name: "Kewin Kubryck", pseudo: "Kewin", role: 'team.role.vp'},
            {name: "Éric Ferrand", pseudo: "Eric", role: 'team.role.treasurer'},
            {name: "Stéphane Lecoanet", pseudo: "Maciste", role: 'team.role.secretary'},
        ],
    },
    {
        mandate: "1996-1997",
        members: [
            {name: "Olivier Tharan", pseudo: "Olive", role: 'team.role.president'},
            {name: "Eric Taieb", pseudo: "Sheroom", role: 'team.role.vp'},
            {name: "Mathieu Guilmineau", pseudo: "DreamT", role: 'team.role.secretary'},
        ],
    },
    {
        mandate: "1995-1996",
        members: [
            {name: "Thomas Noël", pseudo: "Thom", role: 'team.role.president'},
            {name: "Olivier Fontenelle", pseudo: "Fonto", role: 'team.role.secretary'},
        ],
    },
];