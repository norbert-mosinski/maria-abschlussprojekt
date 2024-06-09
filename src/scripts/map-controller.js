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

function onInfoTitleClick(event) {
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
    const oppositeContentId = titleContentIdMapping[oppositeTitleId];
    
    if (!oppositeContentId) {
        console.error(`No opposite content id found for title id: ${titleId}`);
        return;
    }

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
}

function toggleContent(contentId)
{
    const content = document.getElementById(contentId);

    if (!content) {
        console.error(`No content found for id: ${contentId}`);
        return;
    }

    content.classList.toggle('tablet:hidden');
}

function toggleTitleImg(imgId)
{
    const img = document.getElementById(imgId);

    if (!img) {
        console.error(`No img found for id: ${imgId}`);
        return;
    }

    img.src = img.src.includes('plus') ? img.src.replace('plus', 'minus') : img.src.replace('minus', 'plus');
}

function onEntryHover() {

}

function onEntryLeave() {

}