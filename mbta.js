function stopsBetweenStations(startLine, startStation, endLine, endStation){
    const mbta = {
        Red: [
            'South Station',
            'Park Street',
            'Kendall',
            'Central',
            'Harvard',
            'Porter',
            'Davis',
            'Alewife'
        ],
        Green: [
            'Government Center',
            'Park Street',
            'Boylston',
            'Arlington',
            'Copley',
            'Hynes',
            'Kenmore'
        ],
        Orange: [
            'North Station',
            'Haymarket',
            'Park Street',
            'State',
            'Downtown Crossing',
            'Chinatown',
            'Back Bay',
            'Forest Hills'
        ]
    
    }
        var tStops = 0;
        var startIndex = mbta[startLine].indexOf(startStation);
        var endIndex = mbta[endLine].indexOf(endStation);
    
        if (startLine === endLine && startStation === endStation ) { 
            console.log( "No stops.")
        }
    
       else{
         
         const fStopPSIndex = mbta[startLine].indexOf("Park Street");
         const sStopPSindex = mbta[endLine].indexOf("Park Street");
         let stopToParkStreet = Math.abs(startIndex-fStopPSIndex);
         let stopFromParkStreet = Math.abs(endIndex-sStopPSindex);
         tStops = stopToParkStreet + stopFromParkStreet;
         
            console.log( "The total number of stops for the trip is " +tStops)
       }
      
        } 
      stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')
      // Retunes : "No stops."
    
      stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')
    // Retunes : "The total number of stops for the trip is 7"
    