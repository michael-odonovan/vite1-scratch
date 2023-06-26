/* Usage
------------

let myBlocks = [
  { width: 100, height: 100 },
  { width: 100, height: 100 },
  { width: 80, height: 80 },
  { width: 80, height: 80 }
];

let myPacker = new FixedPacker(500, 500);
myPacker.fit(myBlocks);

for(let n = 0 ; n < myBlocks.length ; n++) {
  let block = myBlocks[n];
  if (block.fit) {
    Draw(block.fit.x, block.fit.y, block.width, block.height);
  } else {
    ... do something
  }
}
*/

export default class FixedPacker {
  // this takes the sheet size
  constructor(width, height) {
    this.root = { x: 0, y: 0, width: width, height: height };
  }

  // this takes the array of blocks
  fit(blocks) {
    let n, node, block;
    for (n = 0; n < blocks.length; n++) {
      block = blocks[n];
      if (node = this.findNode(this.root, block.width, block.height))
        block.fit = this.splitNode(node, block.width, block.height);
    }
  }

  findNode(root, width, height) {
    if (root.used)
      return this.findNode(root.right, width, height) || this.findNode(root.down, width, height);
    else if ((width <= root.width) && (height <= root.height))
      return root;
    else
      return null;
  }

  splitNode(node, width, height) {
    node.used = true;
    node.down  = { x: node.x, y: node.y + height, width: node.width, height: node.height - height };
    node.right = { x: node.x + width, y: node.y, width: node.width - width, height: height };
    return node;
  }
}
