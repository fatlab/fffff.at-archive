// The Array Function 

	function makeArray(len) {
	    for (var i = 0; i < len; i++) this[i] = null;
	this.length = len;
	}

	// This is where the array of text/images/sounds is created.

	ideas = new makeArray(3);
	ideas[0] = "<p style='text-align:center'><a target='_blank' rel='nofollow' href='http://geek.thinkunique.org/products/geeks-guide-to-wd-thinkgeek' title='The Geeks Guide To World Domination'><img src='http://geek.thinkunique.org/wp-content/uploads/2009/04/geeks-guide.gif' width='150' height='232' border='0' title='The Geeks Guide To World Domination' alt='The Geeks Guide To World Domination' /></a><br /><a target='_blank' rel='nofollow' href='http://geek.thinkunique.org/products/geeks-guide-to-wd-thinkgeek' title='The Geeks Guide To World Domination'><strong>ThinkGeek</strong></a><br /><a target='_blank' rel='nofollow' href='http://geek.thinkunique.org/products/geeks-guide-to-wd-amazon' title='The Geeks Guide To World Domination'><strong>Amazon</strong></a><br /><a target='_blank' rel='nofollow' href='http://geek.thinkunique.org/products/geeks-guide-to-wd-amazon-uk' title='The Geeks Guide To World Domination'><strong>Amazon UK</strong></a></p>";
	ideas[1] = "<p style='text-align:center'><a target='_blank' rel='nofollow' href='http://geek.thinkunique.org/products/fanboys-dvd-amazon' title='Fanboys'><img src='http://geek.thinkunique.org/wp-content/uploads/2009/05/fanboys-dvd.jpg' width='150' height='210' border='0' title='Fanboys' alt='Fanboys' /></a><br /><a target='_blank' rel='nofollow' href='http://geek.thinkunique.org/products/fanboys-dvd-amazon' title='Fanboys'><strong>Amazon</strong></a><br /><a target='_blank' rel='nofollow' href='http://geek.thinkunique.org/products/fanboys-dvd-amazon-uk' title='Fanboys'><strong>Amazon UK</strong></a></p>"
	ideas[2] = "<p style='text-align:center'><a target='_blank' rel='nofollow' href='http://geek.thinkunique.org/products/pocket-ref-amazon' title='Pocket Ref'><img src='http://geek.thinkunique.org/wp-content/uploads/2009/08/pocket-ref.jpg' width='150' height='268' border='0' title='Pocket Ref' alt='Pocket Ref' /></a><br /><a target='_blank' rel='nofollow' href='http://geek.thinkunique.org/products/pocket-ref-amazon' title='Pocket Ref'><strong>Amazon</strong></a><br /><a target='_blank' rel='nofollow' href='http://geek.thinkunique.org/products/pocket-ref-thinkgeek' title='Pocket Ref'><strong>ThinkGeek</strong></a><br /><a target='_blank' rel='nofollow' href='http://geek.thinkunique.org/products/pocket-ref-amazon-uk' title='Pocket Ref'><strong>Amazon UK</strong></a></p>"


	// The random number generator.

	function rand(n) {
	seed = (0x015a4e35 * seed) % 0x7fffffff;
	return (seed >> 16) % n;
	}
        
	var now = new Date()
	var seed = now.getTime() % 0xffffffff