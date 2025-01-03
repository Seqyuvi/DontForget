namespace DontForgetBackend.API.Contracts
{
    public record TaskResponse
    (
        int Id,
        string? NameTask,
        string? Description,
        int? IdUser
    );
}
