type Item = {
   name: string;
   _id?: string;
   isCompleted: boolean;
};

type Lists = {
   _id: string;
   name: string;
   moveToTrash: boolean;
   items: Item[];
};

export { Lists, Item };
