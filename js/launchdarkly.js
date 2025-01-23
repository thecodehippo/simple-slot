function main() {
    // Set clientSideID to your LaunchDarkly client-side ID
    const clientSideID = '6790d50ec4112009baac0cd9';
    
    // Set flagKey to the feature flag key you want to evaluate
    const flagKey = 'a-b-test';
    
    // Set up the evaluation context. This context should appear on your
    // LaunchDarkly contexts dashboard soon after you run the demo.
  
    const context = {
        kind: 'user',
        key: 'example-user-sandy',
        name: 'Sandy'
    };

    var div = document.createElement('div');
    document.body.appendChild(div);
    div.appendChild(document.createTextNode('Initializing...'));

    if (clientSideID === '') {
        div.replaceChild(document.createTextNode('Please edit index.html to set clientSideID to your LaunchDarkly client-side ID first'), div.firstChild);
        return;
    }
    
    const ldclient = LDClient.initialize(clientSideID, context);

    function render() {
        const flagValue = ldclient.variation(flagKey, false);
        const label = `The ${flagKey} feature flag evaluates to ${flagValue}.`;
        document.body.style.background = flagValue ? '#00844B' : '#373841';
        div.replaceChild(document.createTextNode(label), div.firstChild);

        // Add event listener to your button
        const button = document.getElementById('myButton');

        button.addEventListener('click', (e) => {

            // Track the custom event with LaunchDarkly
            try {
                //ldclient.track('button-click-rate');
            } catch(e) {
                console.log(e);
            }

            console.log('Tracked button click with value:');
        })
    }

    ldclient.on('initialized', () => {
        div.replaceChild(document.createTextNode('SDK successfully initialized!'), div.firstChild);
    });
  
    ldclient.on('failed', () => {
        div.replaceChild(document.createTextNode('SDK failed to initialize'), div.firstChild);
    });

    ldclient.on('ready', render);
    ldclient.on('change', render);

}

main();