(function () {
    window.heapReadyCb = window.heapReadyCb || [];
    window.heap = window.heap || [];
    heap.load = function (envId, clientConfig) {
        window.heap.envId = envId;
        window.heap.clientConfig = clientConfig || {};
        window.heap.clientConfig.shouldFetchServerConfig = false;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = `https://cdn.us.heap-api.com/config/${envId}/heap_config.js`;

        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);

        const methods = [
            'init', 'startTracking', 'stopTracking', 'track', 'resetIdentity', 'identify',
            'getSessionId', 'getUserId', 'getIdentity', 'addUserProperties', 'addEventProperties',
            'removeEventProperty', 'clearEventProperties', 'addAccountProperties', 'addAdapter',
            'addTransformer', 'addTransformerFn', 'onReady', 'addPageviewProperties',
            'removePageviewProperty', 'clearPageviewProperties', 'trackPageview',
        ];

        const createMethod = function (methodName) {
            return function (...args) {
                window.heapReadyCb.push({
                    name: methodName,
                    fn() {
                        if (heap[methodName]) {
                            heap[methodName](...args);
                        }
                    },
                });
            };
        };

        for (let i = 0; i < methods.length; i++) {
            heap[methods[i]] = createMethod(methods[i]);
        }
    };

    heap.load('810388163');
}(document));
