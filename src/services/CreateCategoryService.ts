interface IRequest {
    name:string;
    description: string;
}

class CreateCategoryService{
    execute({ description, name}: IRequest) {
        
        const categoryAlreadyExists = categoriesRepository.findByName(name);

        if(categoryAlreadyExists) {
            throw new Error("Category already exists!")
        }
        categoriesRepository.create({name, description}) 
    }
}

export { CreateCategoryService}