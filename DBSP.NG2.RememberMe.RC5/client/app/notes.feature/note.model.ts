export class Note {
  constructor(
    public title: string,
    public category: string,
    public priority: string,
    public content: string,
    public id?: number
  ) { }
}

// SAMPLE STRUCTURE
//{
//  "id": "1",
//  "title": "C#",
//  "category": "Development",
//  "priority": "1",
//  "content": "Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel."
//}