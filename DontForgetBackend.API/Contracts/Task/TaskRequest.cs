namespace DontForgetBackend.API.Contracts
{
    public record TaskRequest
    (
        int Id,
        string? NameTask,
        string? Description,
        int? IdUser
    );
}
