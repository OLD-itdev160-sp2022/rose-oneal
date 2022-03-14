(function(){




var data = [
    {
        name: 'stylelint',
        description: 'You can control whether stylelint is enabled for different languages or not.',
        author: 'Stylelint',
        url: 'https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint',
        downloads: 583565,
        stars: 16,
        price: 0,
        selector: 'p1'
    },
    {
        name: 'path-intellisense',
        description: 'Helps to autocomplete filenames',
        author: 'Christian Kohler',
        url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
        downloads: 6587534,
        stars: 102,
        price: 0,
        selector: 'p2'
    }
];

    function Package(data){
        this.name = data.name;
        this.author = data.author;
        this.description = data.description;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();

        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        }    
}
var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
};

var getEl = function(id) {
    return document.getElementById(id);
}

var writePackageInfo = function(package) {
    var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector +'-author'),
        downloadEl = getEl(selector +'-downloads'),
        starsEl = getEl(selector +'-stars');
        
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();

}

dateEl = getEl('date');
dateEl.textContent = getTodaysDate();

var stylelint = new Package(data[0]);
writePackageInfo(stylelint);

var path = new Package(data[1]);
writePackageInfo(path);

}());