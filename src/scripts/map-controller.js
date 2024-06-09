const titleContentIdMapping = {
    'route-info-volkstriathlon-title': 'route-info-volkstriathlon-content',
    'route-info-kindertriathlon-title': 'route-info-kindertriathlon-content',
}

const titleOppositeIdMapping = {
    'route-info-volkstriathlon-title': 'route-info-kindertriathlon-title',
    'route-info-kindertriathlon-title': 'route-info-volkstriathlon-title',
}

const titleImgIdMapping = {
    'route-info-volkstriathlon-title': 'route-info-volkstriathlon-title-img',
    'route-info-kindertriathlon-title': 'route-info-kindertriathlon-title-img',
}

const entryIdMapElementMapping = {
    'route-info-volkstriathlon-content-entry-swimming': ['swimmer1', 'start1', 'finish1'],
    'route-info-volkstriathlon-content-entry-cycling-round': ['cyclist1', 'bikeRoute1', 'start1', 'finish1'],
    'route-info-volkstriathlon-content-entry-running-round': ['runner1', 'runRoute1', 'start1', 'finish1'],
    'route-info-volkstriathlon-content-entry-catering': ['bikeRoute1', 'runRoute1', 'catering1', 'catering2', 'catering3', 'start1', 'finish1'],
    'route-info-volkstriathlon-content-entry-catering-cycling': ['cyclist1', 'bikeRoute1', 'catering1', 'catering3', 'start1', 'finish1'],
    'route-info-volkstriathlon-content-entry-catering-running': ['runner1', 'runRoute1', 'catering2', 'start1', 'finish1'],
    'route-info-volkstriathlon-content-entry-start': ['runRoute1', 'bikeRoute1', 'start1'],
    'route-info-volkstriathlon-content-entry-finish': ['runRoute1', 'bikeRoute1', 'finish1'],
    'route-info-kindertriathlon-content-entry-swimming': ['swimmer2', 'start2', 'finish2'],
    'route-info-kindertriathlon-content-entry-cycling-round': ['cyclist2', 'bikeRoute2', 'start2', 'finish2'],
    'route-info-kindertriathlon-content-entry-running-round': ['runner2', 'runRoute2', 'start2', 'finish2'],
    'route-info-kindertriathlon-content-entry-catering-1': ['bikeRoute2', 'cyclist2', 'catering4', 'start2', 'finish2'],
    'route-info-kindertriathlon-content-entry-catering-2': ['bikeRoute2', 'cyclist2', 'catering4', 'start2', 'finish2'],
    'route-info-kindertriathlon-content-entry-start': ['runRoute2', 'bikeRoute2', 'start2'],
    'route-info-kindertriathlon-content-entry-finish': ['runRoute2', 'bikeRoute2', 'finish2'],
}

const map1Elements = [
    'swimmer1',
    'cyclist1',
    'runner1',
    'catering1',
    'catering2',
    'catering3',
    'start1',
    'finish1',
    'runRoute1',
    'bikeRoute1',
];

const map2Elements = [
    'swimmer2',
    'cyclist2',
    'runner2',
    'catering4',
    'start2',
    'finish2',
    'runRoute2',
    'bikeRoute2',
];

const mapElements = {
    swimmer1: 'schwimmen-01',
    cyclist1: 'radfahren-01',
    runner1: 'laufen-01',
    catering1: 'verpflegungspunkt-01',
    catering2: 'verpflegungspunkt-02',
    catering3: 'verpflegungspunkt-03',
    start1: 'start-01',
    finish1: 'ziel-01',
    runRoute1: 'rundstrecke-laufen-01',
    bikeRoute1: 'rundstrecke-rad-01',
    swimmer2: 'schwimmen-02',
    cyclist2: 'radfahren-02',
    runner2: 'laufen-02',
    catering4: 'verpflegungspunkt-04',
    start2: 'start-02',
    finish2: 'ziel-02',
    runRoute2: 'rundstrecke-laufen-02',
    bikeRoute2: 'rundstrecke-rad-02',
}

const titleIdMapElementMapping = {
    'route-info-volkstriathlon-title': map1Elements,
    'route-info-kindertriathlon-title': map2Elements,
};

function onInfoTitleClick(event) {
    const titleId = event.currentTarget.id;

    const contentId = titleContentIdMapping[titleId];

    if (!contentId) {
        console.error(`No content id found for title id: ${titleId}`);
        return;
    }

    const oppositeTitleId = titleOppositeIdMapping[titleId];
    const oppositeContentId = titleContentIdMapping[oppositeTitleId];


    const imgId = titleImgIdMapping[titleId];

    if (!imgId) {
        console.error(`No img id found for title id: ${titleId}`);
        return;
    }

    const oppositeImgId = titleImgIdMapping[oppositeTitleId];

    if (!oppositeImgId) {
        console.error(`No opposite img id found for title id: ${titleId}`);
        return;
    }


    toggleContent(contentId);
    toggleContent(oppositeContentId);

    toggleTitleImg(imgId);
    toggleTitleImg(oppositeImgId);

    toggleInfo(titleId);
}

function onInfoTitleHover(event) {
    const titleId = event.currentTarget.id;

    toggleInfo(titleId);
}

function onInfoTitleLeave(event) {
    const titleId = event.currentTarget.id;

    toggleInfo(titleId);
}

function toggleInfo(titleId) {

    const contentId = titleContentIdMapping[titleId];

    if (!contentId) {
        console.error(`No content id found for title id: ${titleId}`);
        return;
    }

    const oppositeTitleId = titleOppositeIdMapping[titleId];

    const mapElementsToHide = titleIdMapElementMapping[oppositeTitleId];
    hideMapElements(mapElementsToHide);

    const mapElementsToShow = titleIdMapElementMapping[titleId];
    showMapElements(mapElementsToShow);
}

function toggleContent(contentId) {
    const content = document.getElementById(contentId);

    if (!content) {
        console.error(`No content found for id: ${contentId}`);
        return;
    }

    content.classList.toggle('tablet:hidden');
}

function toggleTitleImg(imgId) {
    const img = document.getElementById(imgId);

    if (!img) {
        console.error(`No img found for id: ${imgId}`);
        return;
    }

    img.src = img.src.includes('plus') ? img.src.replace('plus', 'minus') : img.src.replace('minus', 'plus');
}

function registerEventHandlers() {
    registerContentTitleEventHandlers();
    registerContentEntryHoverEventHandlers();
}

function registerContentTitleEventHandlers() {
    const titleIds = Object.keys(titleContentIdMapping);
    titleIds.forEach(titleId => {
        const title = document.getElementById(titleId);
        if (!title) {
            console.error(`No title found for id: ${titleId}`);
            return;
        }

        title.addEventListener('click', onInfoTitleClick);
        title.addEventListener('mouseover', onInfoTitleHover);
        title.addEventListener('mouseout', onInfoTitleLeave);
    });
}

function registerContentEntryHoverEventHandlers() {
    const entryIds = Object.keys(entryIdMapElementMapping);
    entryIds.forEach(entryId => {
        const element = document.getElementById(entryId);
        if (!element) {
            console.error(`No element found for id: ${entryId}`);
            return;
        }

        element.addEventListener('mouseenter', () => onEntryHover(entryId));
        element.addEventListener('mouseleave', () => onEntryLeave(entryId));
    });
}

function onEntryHover(entryId) {
    hideMapElements();
    const toBeShown = entryIdMapElementMapping[entryId];
    showMapElements(toBeShown);
}

function onEntryLeave(entryId) {
    hideMapElements();
    const mapElementsToBeShown = entryId.includes('volkstriathlon') ? map1Elements : map2Elements;
    showMapElements(mapElementsToBeShown);
}

function getMap() {
    return document.getElementById('map').contentDocument;
}

function showMapElements(mapElementsToShow) {

    mapElementsToShow = mapElementsToShow || Object.keys(mapElements);

    mapElementsToShow.forEach(mapElement => {
        const map = getMap();
        const element = map.getElementById(mapElements[mapElement]);

        if (!element) {
            console.error(`No element found for element: ${mapElement}, ${mapElement[mapElement]}`);
            return;
        }

        element.style.display = 'block';
    });
}

function hideMapElements(mapElementsToHide) {
    mapElementsToHide = mapElementsToHide || Object.keys(mapElements);

    mapElementsToHide.forEach(mapElement => {
        const map = getMap();
        const element = map.getElementById(mapElements[mapElement]);
        if (!element) {
            console.error(`No element found for element: ${mapElement}, ${mapElements[mapElement]}`);
            return;
        }

        element.style.display = 'none';
    });
}