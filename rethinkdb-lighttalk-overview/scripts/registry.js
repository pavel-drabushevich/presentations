if (window.shower) {
	window.shower.registry = {
			'reactive': {
				handler: function() {
          connect((r, c) => {
    	        console.log('Connected!');
    	        r.table('turtles').changes().run(c, (err, cursor) => {
    		          cursor.each((err, row) => {
    			             console.log(JSON.stringify(row, null, 2));
    		          });
    	      });
          });
				}
			}
		};
}
