describe("a dynamic music object", function() {
	
	var dymo1 = new DynamicMusicObject("dymo1");
	var dymo2 = new DynamicMusicObject("dymo2");
	var dymo3 = new DynamicMusicObject("dymo3");
	var dymo4 = new DynamicMusicObject("dymo4");
	dymo1.addPart(dymo2);
	dymo1.addPart(dymo3);
	dymo2.addPart(dymo4);
	dymo2.addSimilar(dymo3);
	dymo3.addSimilar(dymo2);
	dymo1.addSimilar(dymo4);
	
	it("returns its uri", function() {
		expect(dymo1.getUri()).toBe("dymo1");
		expect(dymo3.getUri()).toBe("dymo3");
	});
	
	it("keeps track of its hierarchy", function() {
		expect(dymo1.getParts().length).toBe(2);
		expect(dymo2.getParts().length).toBe(1);
	});
	
	it("keeps track of similarity", function() {
		expect(dymo1.getSimilars().length).toBe(1);
		expect(dymo2.getSimilars().length).toBe(1);
		expect(dymo3.getSimilars().length).toBe(1);
		expect(dymo4.getSimilars().length).toBe(0);
	});
	
	it("can return the nth part on a level", function() {
		expect(dymo1.getNthPart(0,0).getUri()).toBe("dymo1");
		expect(dymo1.getNthPart(0,1).getUri()).toBe("dymo2");
		expect(dymo1.getNthPart(1,1).getUri()).toBe("dymo3");
		expect(dymo1.getNthPart(0,2).getUri()).toBe("dymo4");
	});
	
	it("returns its json hierarchy graph", function() {
		var hierarchyGraph = dymo1.toJsonHierarchyGraph();
		expect(hierarchyGraph["nodes"].length).toBe(4);
		expect(hierarchyGraph["links"].length).toBe(3);
	});
	
	it("returns its json similarity graph", function() {
		var similarityGraph = dymo1.toJsonSimilarityGraph();
		expect(similarityGraph["nodes"].length).toBe(4);
		expect(similarityGraph["links"].length).toBe(3);
	});
	
});