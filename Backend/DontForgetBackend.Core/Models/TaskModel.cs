using DontForgetBackend.Core.Models;
using System;
using System.Collections.Generic;

namespace DontForgetBackend.Core.Model;

public class TaskModel
{

    private TaskModel(int id, string? name, string? desc, int? idUser)
    {
        Id = id;
        NameTask = name;
        Description = desc;
        Date = DateOnly.FromDateTime(DateTime.Now);
        IdUser = idUser;
    }
    public int Id { get; set; }

    public string? NameTask { get; set; }

    public string? Description { get; set; }

    public DateOnly? Date { get; set; }

    public int? IdUser { get; set; }

    public virtual UserModel? IdUserNavigation { get; set; }

    public static (TaskModel? TaskModel, string Error) Create(int id, string? name, string? desc, int? idUser)
    {
        var error = String.Empty;

        if (string.IsNullOrEmpty(desc))
        {
            error = "Вы не заполнили описание или Имя";
        }

        var task = new TaskModel(id, name, desc, idUser);

        return (task, error);
    }
}
