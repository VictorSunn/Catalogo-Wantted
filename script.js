document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const logoHeader = document.getElementById('logo');
    const logoFooter = document.getElementById('footer-logo');
    const btn = document.getElementById('theme-toggle');
    const catalogoContainer = document.getElementById('catalogo-container');
    const searchInput = document.getElementById('search-input');
    const filterSelect = document.getElementById('filter-select');
    const STORAGE_KEY = 'wg-theme';

    const games = [
        { 
            "nome": "Accel World vs. Sword Art Online (Deluxe Edition) (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/607880/header.jpg?t=1664228994", 
            "categoria": "PC" 
        },
        { 
            "nome": "Achilles: Legends Untold (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1314000/header.jpg?t=1700673410", 
            "categoria": "PC" 
        },
        { 
            "nome": "Afterimage (PC)", 
            "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1701520/header.jpg?t=1725487708", 
            "categoria": "PC" 
        },
        { 
            "nome": "Age of Empires: Definitive Edition (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1017900/header.jpg?t=1678829623", 
            "categoria": "PC" 
        },
        { 
            "nome": "Alan Wake (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/108710/header.jpg?t=1618933224", 
            "categoria": "PC" 
        },
        { 
            "nome": "Alba: A Wildlife Adventure (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1337010/header.jpg?t=1680190343", 
            "categoria": "PC" 
        },
        { 
            "nome": "Akane the Kunoichi (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/291130/header.jpg?t=1642533035", 
            "categoria": "PC" 
        },
        { 
            "nome": "Aliens: Colonial Marines (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/49540/header.jpg?t=1669913982", 
            "categoria": "PC" 
        },
        { 
            "nome": "Aliens: Dark Descent (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1150440/header.jpg?t=1701188358", 
            "categoria": "PC" 
        },
        { 
            "nome": "Alone in the Dark: Illumination (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/275060/header.jpg?t=1665769152", 
            "categoria": "PC" 
        },
        { 
            "nome": "Amnesia: The Bunker (PC)", 
            "imagem": "https://cdn1.epicgames.com/spt-assets/671aee4c8fb64a1c967d97f31f093e7a/amnesia-the-bunker-1x2n7.png", 
            "categoria": "PC" 
        },
        { 
            "nome": "Anomaly: Warzone Earth (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/91200/header.jpg?t=1678726889", 
            "categoria": "PC" 
        },
        { 
            "nome": "Aragami 2 (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1158370/header.jpg?t=1682594639", 
            "categoria": "PC" 
        },
        { 
            "nome": "Assetto Corsa (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/244210/header.jpg?t=1683905018", 
            "categoria": "PC" 
        },
        { 
            "nome": "Asterigos: Curse of the Stars (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1731070/header.jpg?t=1698748721", 
            "categoria": "PC" 
        },
        { 
            "nome": "Astral Ascent (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1280930/header.jpg?t=1701443690", 
            "categoria": "PC" 
        },
        { 
            "nome": "Atlas Fallen (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1230530/header.jpg?t=1701188448", 
            "categoria": "PC" 
        },
        { 
            "nome": "Avatar: The Last Airbender - Quest for Balance (PC)", 
            "imagem": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1620030/capsule_616x353.jpg?t=1746025140", 
            "categoria": "PC" 
        },
        { 
            "nome": "Batman: Arkham Asylum (GOTY) (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/35140/header.jpg?t=1699292888", 
            "categoria": "PC" 
        },
        { 
            "nome": "Batman: Arkham City (GOTY) (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/200260/header.jpg?t=1701911703", 
            "categoria": "PC" 
        },
        { 
            "nome": "Batman: Arkham Collection (PC)", 
            "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/subs/320795/header.jpg?t=1745533717", 
            "categoria": "PC" 
        },
        { 
            "nome": "Batman: Arkham Origins - Blackgate (Deluxe Edition) (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/267490/header.jpg?t=1699292882", 
            "categoria": "PC" 
        },
        { 
            "nome": "Batman: The Enemy Within - The Telltale Series (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/675260/header.jpg?t=1661271109", 
            "categoria": "PC" 
        },
        { 
            "nome": "Ben 10: Power Trip (PC)", 
            "imagem": "https://imgproxy.eneba.games/V7WuOE1bsDM0X6NtS2Xh-su8TZ8qghLOjI-D1qpwaWE/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9D/SUtfdGdaOUlmT2pP/RTBxYllsWlU1NUJU/MzBnNzVJZzViVHk3/aFRiM0xrLmpwZWc", 
            "categoria": "PC" 
        },
        { 
            "nome": "Bendy and the Dark Revival (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1063660/header.jpg?t=1682974984", 
            "categoria": "PC" 
        },
        { 
            "nome": "Bendy and the Ink Machine (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/622650/header.jpg?t=1667003402", 
            "categoria": "PC" 
        },
        { 
            "nome": "Beyond: Two Souls (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/960990/header.jpg?t=1673367123", 
            "categoria": "PC" 
        },
        { 
            "nome": "BLACKTAIL (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1532690/header.jpg?t=1699971932", 
            "categoria": "PC" 
        },
        { 
            "nome": "Black Book (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1138660/header.jpg?t=1693570081", 
            "categoria": "PC" 
        },
        { 
            "nome": "Black Skylands (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1143810/header.jpg?t=1691682181", 
            "categoria": "PC" 
        },
        { 
            "nome": "Blades of Time (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/208670/header.jpg?t=1687425178", 
            "categoria": "PC" 
        },
        { 
            "nome": "Blade Assault (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1367300/header.jpg?t=1693895318", 
            "categoria": "PC" 
        },
        { 
            "nome": "Blade Symphony (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/225600/header.jpg?t=1668550181", 
            "categoria": "PC" 
        },
        { 
            "nome": "Blanc (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1982340/header.jpg?t=1693895350", 
            "categoria": "PC" 
        },
        { 
            "nome": "Blood Knights (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/258220/header.jpg?t=1642524790", 
            "categoria": "PC" 
        },
        { 
            "nome": "Bloodroots Steam Key (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/820540/header.jpg?t=1667000490", 
            "categoria": "PC" 
        },
        { 
            "nome": "Borderlands 2 (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/49520/header.jpg?t=1687814949", 
            "categoria": "PC" 
        },
        { 
            "nome": "Borderlands: The Handsome Collection (PC)", 
            "imagem": "https://cdn2.unrealengine.com/Diesel%2Fbundles%2Fborderlands-the-handsome-collection%2FEGS_BorderlandsTheHandsomeCollection_GearboxSoftware_S1-2560x1440-6a050f8fb6779371abd58ecbbb6a1e62c8520dc2.jpg", 
            "categoria": "PC" 
        },
        { 
            "nome": "Borderlands: The Pre-Sequel (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/261640/header.jpg?t=1645053423", 
            "categoria": "PC" 
        },
        { 
            "nome": "Castlevania: Lords of Shadow - Ultimate Edition (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/234080/header.jpg?t=1695646194", 
            "categoria": "PC" 
        },
        { 
            "nome": "Citizen Sleeper (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1578650/header.jpg?t=1690472477", 
            "categoria": "PC" 
        },
        { 
            "nome": "Condemned: Criminal Origins (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/4720/header.jpg?t=1644919586", 
            "categoria": "PC" 
        },
        { 
            "nome": "CONSCRIPT (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1286990/header.jpg?t=1694396918", 
            "categoria": "PC" 
        },
        { 
            "nome": "Dandy Ace (PC)", 
            "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1037130/capsule_616x353.jpg?t=1620854766", 
            "categoria": "PC" 
        },
        { 
            "nome": "Dark Deity (PC)", 
            "imagem": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1374840/capsule_616x353.jpg?t=1746079316", 
            "categoria": "PC" 
        },
        { 
            "nome": "Darksiders (Warmastered Edition) (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/462780/header.jpg?t=1682607996", 
            "categoria": "PC" 
        },
        { 
            "nome": "Darksiders III Steam (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/606280/header.jpg?t=1683296068", 
            "categoria": "PC" 
        },
        { 
            "nome": "Dead Rising 4 (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/543460/header.jpg?t=1658421867", 
            "categoria": "PC" 
        },
        { 
            "nome": "Deadlink (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1676130/header.jpg?t=1698246394", 
            "categoria": "PC" 
        },
        { 
            "nome": "Death end re;Quest (PC)", 
            "imagem": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990050/capsule_616x353.jpg?t=1730837404", 
            "categoria": "PC" 
        },
        { 
            "nome": "Death's Door (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/894020/header.jpg?t=1684949980", 
            "categoria": "PC" 
        },
        { 
            "nome": "Death's Gambit: Afterlife (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/356650/header.jpg?t=1682606552", 
            "categoria": "PC" 
        },
        { 
            "nome": "Demon Turf (PC)", 
            "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1325900/header.jpg?t=1734281591", 
            "categoria": "PC" 
        },
        { 
            "nome": "Desolate (PC)", 
            "imagem": "https://i0.wp.com/web.phenixxgaming.com/wp-content/uploads/2020/12/content-16.jpg?fit=1280%2C720&ssl=1", 
            "categoria": "PC" 
        },
        { 
            "nome": "Devil May Cry 4 (Special Edition) (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/329050/header.jpg?t=1664228943", 
            "categoria": "PC" 
        },
        { 
            "nome": "Devil's Hunt (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/887720/header.jpg?t=1646862419", 
            "categoria": "PC" 
        },
        { 
            "nome": "DiRT Showdown (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/201700/header.jpg?t=1642540024", 
            "categoria": "PC" 
        },
        { 
            "nome": "Die Young (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/433170/header.jpg?t=1678829029", 
            "categoria": "PC" 
        },
        { 
            "nome": "Digimon Story Cyber Sleuth (Complete Edition) (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1042550/header.jpg?t=1664228974", 
            "categoria": "PC" 
        },
        { 
            "nome": "Dishonored 2 Steam Key (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/403640/header.jpg?t=1676991162", 
            "categoria": "PC" 
        },
        { 
            "nome": "DMC: Devil May Cry (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/220440/header.jpg?t=1664228956", 
            "categoria": "PC" 
        },
        { 
            "nome": "Dome Keeper (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1637320/header.jpg?t=1699971958", 
            "categoria": "PC" 
        },
        { 
            "nome": "DreamWorks All-Star Kart Racing (PC)", 
            "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2224740/capsule_616x353.jpg?t=1746025480", 
            "categoria": "PC" 
        },
        { 
            "nome": "DreamWorks Dragons: Dawn of New Riders (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/896960/header.jpg?t=1668615967", 
            "categoria": "PC" 
        },
        { 
            "nome": "Drug Dealer (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/682990/header.jpg?t=1699451381", 
            "categoria": "PC" 
        },
        { 
            "nome": "Duke Nukem Forever (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/57900/header.jpg?t=1632863773", 
            "categoria": "PC" 
        },
        { 
            "nome": "Dying Light - Bad Blood (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/766370/header.jpg?t=1671032332", 
            "categoria": "PC" 
        },
        { 
            "nome": "Earth's Dawn (PC)", 
            "imagem": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/494600/header.jpg?t=1744970225", 
            "categoria": "PC" 
        },
        { 
            "nome": "Eastern Exorcist (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1120810/header.jpg?t=1690967060", 
            "categoria": "PC" 
        },
        { 
            "nome": "ELDERBORN (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/727850/header.jpg?t=1667000676", 
            "categoria": "PC" 
        },
        { 
            "nome": "Eternal Threads (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1046790/header.jpg?t=1690825380", 
            "categoria": "PC" 
        },
        { 
            "nome": "Extinction Deluxe Edition (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/570710/header.jpg?t=1678829094", 
            "categoria": "PC" 
        },
        { 
            "nome": "Fallout Tactics: Brotherhood of Steel (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/38420/header.jpg?t=1699298539", 
            "categoria": "PC" 
        },
        { 
            "nome": "FEAR - Ultimate Shooter Edition (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/21090/header.jpg?t=1642533083", 
            "categoria": "PC" 
        },
        { 
            "nome": "Flynn: Son of Crimson (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/737520/header.jpg?t=1693895521", 
            "categoria": "PC" 
        },
        { 
            "nome": "Fort Solis (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1931730/header.jpg?t=1694435777", 
            "categoria": "PC" 
        },
        { 
            "nome": "Garfield Lasagna Party (PC)", 
            "imagem": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2008410/capsule_616x353.jpg?t=1750323391", 
            "categoria": "PC" 
        },
        { 
            "nome": "Gotham Knights (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1496790/header.jpg?t=1698159187", 
            "categoria": "PC" 
        },
        { 
            "nome": "Grapple Dog (PC)", 
            "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1345860/header.jpg?t=1716292444", 
            "categoria": "PC" 
        },
        { 
            "nome": "Grand Theft Auto V Enhanced (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg?t=1695066982", 
            "categoria": "PC" 
        },
        { 
            "nome": "Grotto (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1538850/header.jpg?t=1646862376", 
            "categoria": "PC" 
        },
        { 
            "nome": "Guardians of Middle-earth (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/111900/header.jpg?t=1642525540", 
            "categoria": "PC" 
        },
        { 
            "nome": "Guilty Gear Xrd -Sign- (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/376300/header.jpg?t=1678830155", 
            "categoria": "PC" 
        },
        { 
            "nome": "Hakuoki: Kyoto Winds (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/589530/header.jpg?t=1646862551", 
            "categoria": "PC" 
        },
        { 
            "nome": "Hatred (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/341940/header.jpg?t=1672323862", 
            "categoria": "PC" 
        },
        { 
            "nome": "HELLDIVERS Dive Harder Edition (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/394510/header.jpg?t=1680193850", 
            "categoria": "PC" 
        },
        { 
            "nome": "Hitman: Absolution (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/203140/header.jpg?t=1673367103", 
            "categoria": "PC" 
        },
        { 
            "nome": "Hitman: Blood Money (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/6860/header.jpg?t=1673367098", 
            "categoria": "PC" 
        },
        { 
            "nome": "Homestead Arcana (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1867520/header.jpg?t=1693895556", 
            "categoria": "PC" 
        },
        { 
            "nome": "Honey, I Joined a Cult (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/841190/header.jpg?t=1683281230", 
            "categoria": "PC" 
        },
        { 
            "nome": "Hotel Transylvania 3: Monsters Overboard (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/757600/header.jpg?t=1668616147", 
            "categoria": "PC" 
        },
        { 
            "nome": "Human: Fall Flat (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/477160/header.jpg?t=1695287693", 
            "categoria": "PC" 
        },
        { 
            "nome": "Indiana Jones and the Emperor's Tomb (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/560430/header.jpg?t=1692297127", 
            "categoria": "PC" 
        },
        { 
            "nome": "Injustice 2 (Legendary Edition) (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/627270/header.jpg?t=1699292866", 
            "categoria": "PC" 
        },
        { 
            "nome": "Injustice: Gods Among Us (Ultimate Edition) (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/242700/header.jpg?t=1699292871", 
            "categoria": "PC" 
        },
        { 
            "nome": "Is It Wrong to Try to Pick Up Girls in a Dungeon? Infinite Combate (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1187940/header.jpg?t=1658422615", 
            "categoria": "PC" 
        },
        { 
            "nome": "KILL la KILL -IF (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/922500/header.jpg?t=1678830182", 
            "categoria": "PC" 
        },
        { 
            "nome": "LEGO Batman: The Videogame (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/21000/header.jpg?t=1699292895", 
            "categoria": "PC" 
        },
        { 
            "nome": "LEGO DC Super-Villains Deluxe Edition (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/829110/header.jpg?t=1699292850", 
            "categoria": "PC" 
        },
        { 
            "nome": "LEGO Indiana Jones 2: The Adventure Continues (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/32450/header.jpg?t=1692296767", 
            "categoria": "PC" 
        },
        { 
            "nome": "LEGO Jurassic World (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/352400/header.jpg?t=1699292842", 
            "categoria": "PC" 
        },
        { 
            "nome": "LEGO: Batman 3 - Beyond Gotham (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/313690/header.jpg?t=1699292892", 
            "categoria": "PC" 
        },
        { 
            "nome": "LEGO: Harry Potter Years 1-4 (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/21130/header.jpg?t=1699292862", 
            "categoria": "PC" 
        },
        { 
            "nome": "LEGO: Lord of the Rings (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/214510/header.jpg?t=1699292859", 
            "categoria": "PC" 
        },
        { 
            "nome": "LEGO: Marvel Super Heroes (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/249130/header.jpg?t=1699292856", 
            "categoria": "PC" 
        },
        { 
            "nome": "LEGO: Marvel Super Heroes 2 (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/647830/header.jpg?t=1699292839", 
            "categoria": "PC" 
        },
        { 
            "nome": "LEGO: Marvel's Avengers (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/405310/header.jpg?t=1699292835", 
            "categoria": "PC" 
        },
        { 
            "nome": "LEGO: Star Wars - The Force Awakens (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/438640/header.jpg?t=1699292832", 
            "categoria": "PC" 
        },
        { 
            "nome": "LEGO Star Wars: The Skywalker Saga - Deluxe Edition (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/920210/header.jpg?t=1695201183", 
            "categoria": "PC" 
        },
        { 
            "nome": "LEGO: The Hobbit (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/285160/header.jpg?t=1699292829", 
            "categoria": "PC" 
        },
        { 
            "nome": "LEGO: The Incredibles (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/818320/header.jpg?t=1699292822", 
            "categoria": "PC" 
        },
        { 
            "nome": "LEGO: Worlds (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/332310/header.jpg?t=1699292819", 
            "categoria": "PC" 
        },
        { 
            "nome": "The LEGO Movie 2 Videogame (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/881320/header.jpg?t=1699292811", 
            "categoria": "PC" 
        },
        { 
            "nome": "The LEGO Ninjago Movie Video Game (PC)", 
            "imagem": "https://img.hype.games/cdn/a8b612b8-24b7-439e-99f4-51167c3378a6tlnmvg-cover.jpg", 
            "categoria": "PC" 
        },
        { 
            "nome": "Let's School (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1937500/header.jpg?t=1698200679", 
            "categoria": "PC" 
        },
        { 
            "nome": "Lil Gator Game (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1586800/header.jpg?t=1682607153", 
            "categoria": "PC" 
        },
        { 
            "nome": "Little Nightmares (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/424840/header.jpg?t=1685008581", 
            "categoria": "PC" 
        },
        { 
            "nome": "Lost Eidolons (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1580520/header.jpg?t=1699566270", 
            "categoria": "PC" 
        },
        { 
            "nome": "Lost Ruins (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1306630/header.jpg?t=1693895594", 
            "categoria": "PC" 
        },
        { 
            "nome": "Mad Max (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/234140/header.jpg?t=1699292804", 
            "categoria": "PC" 
        },
        { 
            "nome": "Max Payne (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/12140/header.jpg?t=1618853403", 
            "categoria": "PC" 
        },
        { 
            "nome": "Mega Man Legacy Collection (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/363440/header.jpg?t=1658421881", 
            "categoria": "PC" 
        },
        { 
            "nome": "Mega Man X: Legacy Collection (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/743890/header.jpg?t=1664228965", 
            "categoria": "PC" 
        },
        { 
            "nome": "Mega Man X: Legacy Collection 2 (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/743900/header.jpg?t=1664228960", 
            "categoria": "PC" 
        },
        { 
            "nome": "Miasma Chronicles (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1649010/header.jpg?t=1698242490", 
            "categoria": "PC" 
        },
        { 
            "nome": "Middle-earth: Shadow of Mordor (GOTY) (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/241930/header.jpg?t=1699292795", 
            "categoria": "PC" 
        },
        { 
            "nome": "Middle-earth: Shadow of War (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/356190/header.jpg?t=1699292789", 
            "categoria": "PC" 
        },
        { 
            "nome": "Minecraft Legends - Windows Store (PC)", 
            "imagem": "https://store-images.s-microsoft.com/image/apps.49290.13695729085627777.d47fe503-0c04-49c0-9a20-6f92ecd43d76.9fcd9902-e1ce-4e38-8645-188515e74708", 
            "categoria": "PC" 
        },
        { 
            "nome": "Mortal Kombat 11 Ultimate (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/976310/header.jpg?t=1699292781", 
            "categoria": "PC" 
        },
        { 
            "nome": "Mortal Kombat X (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/307780/header.jpg?t=1699292784", 
            "categoria": "PC" 
        },
        { 
            "nome": "MX vs ATV Reflex (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/55140/header.jpg?t=1642533055", 
            "categoria": "PC" 
        },
        { 
            "nome": "My Friendly Neighborhood (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1574260/header.jpg?t=1695760882", 
            "categoria": "PC" 
        },
        { 
            "nome": "My Time at Sandrock (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1084600/header.jpg?t=1699502283", 
            "categoria": "PC" 
        },
        { 
            "nome": "NEOVERSE (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/994220/header.jpg?t=1682607198", 
            "categoria": "PC" 
        },
        { 
            "nome": "One Piece Pirate Warriors 3 (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/331600/header.jpg?t=1695201088", 
            "categoria": "PC" 
        },
        { 
            "nome": "Ori and the Blind Forest (Definitive Edition) (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/387290/header.jpg?t=1667843422", 
            "categoria": "PC" 
        },
        { 
            "nome": "Outlast 2 (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/414700/header.jpg?t=1646862569", 
            "categoria": "PC" 
        },
        { 
            "nome": "Paradise Lost (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/982720/header.jpg?t=1667000780", 
            "categoria": "PC" 
        },
        { 
            "nome": "Pathologic 2 (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/505230/header.jpg?t=1678830113", 
            "categoria": "PC" 
        },
        { 
            "nome": "Portal Knights (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/374040/header.jpg?t=1694432249", 
            "categoria": "PC" 
        },
        { 
            "nome": "Postal Brain Damaged (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1359980/header.jpg?t=1699351053", 
            "categoria": "PC" 
        },
        { 
            "nome": "POSTAL 2 (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/223470/header.jpg?t=1666895311", 
            "categoria": "PC" 
        },
        { 
            "nome": "Praey for the Gods (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/494430/header.jpg?t=1681232353", 
            "categoria": "PC" 
        },
        { 
            "nome": "Quantum Break (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/474960/header.jpg?t=1667843389", 
            "categoria": "PC" 
        },
        { 
            "nome": "Rain World (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/312520/header.jpg?t=1689793138", 
            "categoria": "PC" 
        },
        { 
            "nome": "Ravenbound (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1307660/header.jpg?t=1693895627", 
            "categoria": "PC" 
        },
        { 
            "nome": "Resident Evil 0 / Biohazard 0 HD Remaster (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/339340/header.jpg?t=1664228946", 
            "categoria": "PC" 
        },
        { 
            "nome": "Resident Evil 6 Complete (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/221040/header.jpg?t=1664228952", 
            "categoria": "PC" 
        },
        { 
            "nome": "Return to Monkey Island (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/2060130/header.jpg?t=1684949576", 
            "categoria": "PC" 
        },
        { 
            "nome": "Risk of Rain 2 (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/632360/header.jpg?t=1697131704", 
            "categoria": "PC" 
        },
        { 
            "nome": "Rise of the Tomb Raider (20th Anniversary Edition) (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/391220/header.jpg?t=1681395910", 
            "categoria": "PC" 
        },
        { 
            "nome": "Scribblenauts Unmasked: A DC Comics Adventure (PC)", 
            "imagem": "https://assets.nuuvem.com/image/upload/v1/products/557dba9969702d0a9ce13600/sharing_images/gkydms6uxzfbyafre7af.jpg", 
            "categoria": "PC" 
        },
        { 
            "nome": "Sense - 不祥的预感: A Cyberpunk Ghost Story (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1120560/header.jpg?t=1682607217", 
            "categoria": "PC" 
        },
        { 
            "nome": "Shenmue I & II (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/758330/header.jpg?t=1690295831", 
            "categoria": "PC" 
        },
        { 
            "nome": "Sid Meier's Civilization VI (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/289070/header.jpg?t=1683839212", 
            "categoria": "PC" 
        },
        { 
            "nome": "Silent Hill Homecoming (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/19000/header.jpg?t=1642533077", 
            "categoria": "PC" 
        },
        { 
            "nome": "Silver Chains (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/975470/header.jpg?t=1646862562", 
            "categoria": "PC" 
        },
        { 
            "nome": "Sker Ritual (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1492070/header.jpg?t=1701359850", 
            "categoria": "PC" 
        },
        { 
            "nome": "Sonic Adventure 2 (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/213610/header.jpg?t=1690296068", 
            "categoria": "PC" 
        },
        { 
            "nome": "Sonic Lost World (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/329440/header.jpg?t=1690296001", 
            "categoria": "PC" 
        },
        { 
            "nome": "Souldiers (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1419160/header.jpg?t=1694436573", 
            "categoria": "PC" 
        },
        { 
            "nome": "Steelrising (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1283400/header.jpg?t=1696240212", 
            "categoria": "PC" 
        },
        { 
            "nome": "Strider (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/235210/header.jpg?t=1664228950", 
            "categoria": "PC" 
        },
        { 
            "nome": "Street Fighter: 30th Anniversary Collection (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/586200/header.jpg?t=1664228968", 
            "categoria": "PC" 
        },
        { 
            "nome": "Suicide Squad: Kill the Justice League (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/315210/header.jpg?t=1701979401", 
            "categoria": "PC" 
        },
        { 
            "nome": "Sunset Overdrive (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/847370/header.jpg?t=1667843403", 
            "categoria": "PC" 
        },
        { 
            "nome": "Sword Art Online: Hollow Realization (Deluxe Edition) (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/607890/header.jpg?t=1664228991", 
            "categoria": "PC" 
        },
        { 
            "nome": "Tales of Vesperia: Definitive Edition (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/738540/header.jpg?t=1685008542", 
            "categoria": "PC" 
        },
        { 
            "nome": "Tchia (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1496590/header.jpg?t=1679069279", 
            "categoria": "PC" 
        },
        { 
            "nome": "The Ascent Steam (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/979690/header.jpg?t=1682606822", 
            "categoria": "PC" 
        },
        { 
            "nome": "The Incredible Adventures of Van Helsing - Complete Pack (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/215530/header.jpg?t=1686566023", 
            "categoria": "PC" 
        },
        { 
            "nome": "The Invincible (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/731040/header.jpg?t=1701358920", 
            "categoria": "PC" 
        },
        { 
            "nome": "Tomb Raider GOTY (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/203160/header.jpg?t=1618854018", 
            "categoria": "PC" 
        },
        { 
            "nome": "Tribes of Midgard (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/858820/header.jpg?t=1698845873", 
            "categoria": "PC" 
        },
        { 
            "nome": "Trek to Yomi (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1370050/header.jpg?t=1684949504", 
            "categoria": "PC" 
        },
        { 
            "nome": "Trollhunters: Defenders of Arcadia (PC)", 
            "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1344070/header.jpg?t=1698327718", 
            "categoria": "PC" 
        },
        { 
            "nome": "Ultra Street Fighter IV (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/45760/header.jpg?t=1690403698", 
            "categoria": "PC" 
        },
        { 
            "nome": "Wanted: Dead (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1981610/header.jpg?t=1693895697", 
            "categoria": "PC" 
        },
        { 
            "nome": "Wasteland 3 (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/719040/header.jpg?t=1667000858", 
            "categoria": "PC" 
        },
        { 
            "nome": "Watchmen The End is Nigh Part 1 and 2 Bundle Steam (PC)", 
            "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21030/header.jpg?t=1723777053", 
            "categoria": "PC" 
        },
        { 
            "nome": "Wizard with a Gun (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/1150530/header.jpg?t=1698246419", 
            "categoria": "PC" 
        },
        { 
            "nome": "Wolfenstein: The New Order (uncut) (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/201810/header.jpg?t=1676991193", 
            "categoria": "PC" 
        },
        { 
            "nome": "X-Blades (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/7510/header.jpg?t=1687425143", 
            "categoria": "PC" 
        },
        { 
            "nome": "X-COM: Complete Pack (PC)", 
            "imagem": "https://images.greenmangaming.com/9773ed8f6c8940f7a4813f195a654608/bb065f4b8ce947b8896bd6b487a99d76.jpg", 
            "categoria": "PC" 
        },
        { 
            "nome": "XCOM: Enemy Unknown (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/200510/header.jpg?t=1632863753", 
            "categoria": "PC" 
        },
        { 
            "nome": "Zoeti (PC)", 
            "imagem": "https://i.ytimg.com/vi/zjpRijNth98/maxresdefault.jpg", 
            "categoria": "PC" 
        },
        { 
            "nome": "Zwei: The Arges Adventure (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/427700/header.jpg?t=1642533039", 
            "categoria": "PC" 
        },
        { 
            "nome": "嗜血印 Bloody Spell (PC)", 
            "imagem": "https://cdn.akamai.steamstatic.com/steam/apps/992300/header.jpg?t=1695886361", 
            "categoria": "PC" 
        }
    ];

    const renderGames = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filterCategory = filterSelect.value;

        const filteredGames = games.filter(game => {
            const matchesSearch = game.nome.toLowerCase().includes(searchTerm);
            const matchesCategory = filterCategory === 'all' || game.categoria === filterCategory;
            return matchesSearch && matchesCategory;
        });

        catalogoContainer.innerHTML = '';

        if (filteredGames.length === 0) {
            catalogoContainer.innerHTML = '<p style="text-align: center; margin-top: 20px;">Nenhum jogo encontrado com os critérios de busca.</p>';
        } else {
            filteredGames.forEach((game, index) => {
                const gameCard = document.createElement('article');
                gameCard.classList.add('jogo');
                gameCard.dataset.id = index + 1;

                gameCard.innerHTML = `
                  <img src="${game.imagem}" alt="${game.nome}" class="thumb" onerror="this.classList.add('error-placeholder'); this.outerHTML = '<div class=\'thumb error-placeholder\'>IMAGEM</div>';">
                  <div class="info">
                    <div class="titulo">${game.nome}</div>
                    <div class="sub">Key digital</div>
                  </div>
                  <div class="action">
                    </div>
                `;
                catalogoContainer.appendChild(gameCard);
            });
        }
    };

    function applyTheme(theme) {
        body.classList.toggle('dark', theme === 'dark');
        const isDark = theme === 'dark';
        logoHeader.src = isDark ? logoHeader.dataset.white : logoHeader.dataset.black;
        logoFooter.src = isDark ? logoFooter.dataset.white : logoFooter.dataset.black;
        btn.textContent = isDark ? '☀ Modo Claro' : '🌙 Modo Escuro';
        btn.setAttribute('aria-pressed', isDark);
        try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
    }

    function toggleTheme() {
        const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }

    (function initApp() {
        let savedTheme = null;
        try { savedTheme = localStorage.getItem(STORAGE_KEY); } catch (e) {}
        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(prefersDark ? 'dark' : 'light');
        }
        renderGames();
    })();

    searchInput.addEventListener('input', renderGames);
    filterSelect.addEventListener('change', renderGames);
    btn.addEventListener('click', toggleTheme);

    logoHeader.addEventListener('error', () => {
        console.error('Falha ao carregar a logo do cabeçalho.');
    });
    logoFooter.addEventListener('error', () => {
        console.error('Falha ao carregar a logo do rodapé.');
    });
});