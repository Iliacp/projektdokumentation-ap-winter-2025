// using-Anweisungen aus Platzgruenden weggelassen

namespace ABUS.Cloud.Portal.Common.Tests.DeviceAnalysis
{
	public class DefaultDeviceAnalysisRepositoryTests : IAsyncLifetime
	{
		// Fixture = gemeinsame Testumgebung fuer Integrationstests
		private readonly IntegrationTestFixture _fixture;
		// Das zu testende Repository
		private readonly IDeviceAnalysisRepository _repository; 
		private static readonly Guid _deviceId = Guid.NewGuid();
		private static readonly DateTime _now = DateTime.UtcNow;
		// die folgenden englischen Kommentare sind auch im Originalcode vorhanden
		private readonly MessageSinkEntry[] _testingData = [
			// Last year
			CreateMessage(_deviceId, "type-a", _now - TimeSpan.FromDays(200)),
			CreateMessage(_deviceId, "type-a", _now - TimeSpan.FromDays(59)),
			CreateMessage(_deviceId, "type-b", _now - TimeSpan.FromDays(32)),
			// Last month
			CreateMessage(_deviceId, "type-b", _now - TimeSpan.FromDays(27)),
			CreateMessage(_deviceId, "type-b", _now - TimeSpan.FromDays(8)),
			// Wrong messages
			CreateMessage(Guid.NewGuid(), "wrong-device", _now - TimeSpan.FromMinutes(1))
		];

		public DefaultDeviceAnalysisRepositoryTests(IntegrationTestFixture fixture)
		{
			_fixture = fixture;

			// Initialisierung des Repositories ueber Dependency Injection der Test-Fixture
			_repository = _fixture.DefaultServiceProvider
				.GetKeyedService<IDeviceAnalysisRepository>(DeviceAnalysisConstants.DEFAULT_REPOSITORY_KEY);
		}

		// ... Test-Setup und Teardown-Methoden ...

		[Fact]
		public async Task Should_get_less_message_statistics_for_last_month()
		{
			// Arrange
			var from = _now - TimeSpan.FromDays(30);

			// Act
			var result = await _repository.GetMessageStatisticsAsync(_deviceId, from, _now);

			// Assert
			// Nur "type-b" Nachrichten im letzten Monat
			result.Should().HaveCount(1);
			// Falsche Geraete-ID soll nicht enthalten sein
			result.Should().NotContain(stat => stat.MessageType == "wrong-device");
			// "type-a" Nachrichten sollen nicht enthalten sein (aelter als 30 Tage)
			result.Should().NotContain(stat => stat.MessageType == "type-a");
			// Es gibt 2 "type-b" Nachrichten im letzten Monat
			result.First(stat => stat.MessageType == "type-b").Count.Should().Be(2);
		}

		// ... weitere Tests ...

		private static MessageSinkEntry CreateMessage(Guid deviceId, string messageType, DateTime enqueueTimeUtc)
		{
			// Methodenimplementierung aus Platzgruenden weggelassen.
		}
	}
}
