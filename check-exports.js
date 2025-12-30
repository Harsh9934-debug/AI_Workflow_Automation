const panels = require('react-resizable-panels');
console.log('Exports:', Object.keys(panels));
try {
    const { PanelGroup } = require('react-resizable-panels');
    console.log('PanelGroup:', !!PanelGroup);
} catch (e) {
    console.error(e);
}
